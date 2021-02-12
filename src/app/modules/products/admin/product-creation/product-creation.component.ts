import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsConfig } from 'src/app/config/forms-config';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { CategoryModel } from 'src/app/models/parameters/categori.model';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductModelCombinadas } from 'src/app/models/products/product.modelcombinada';
import { BrandService } from 'src/app/services/parameters/brand.service';
import { CategoryService } from 'src/app/services/parameters/category.service';
import { ProductService } from 'src/app/services/products/product.service';

declare const initSelect: any;
declare const showMessage: any;
@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  fgValidator!: FormGroup;
  codeMinLength = FormsConfig.CODE_MIN_LENGTH;
  nameMinLength = FormsConfig.PARAM_NAME_MIN_LENGTH;
  categoryList!: CategoryModel[];
  brandList!: BrandModel[];


  constructor(
    private fb: FormBuilder,
    private service:ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,

     private router: Router,
     private route: ActivatedRoute
     ) { 
      
     }
  //PERMISOS DE MI FORMULARIO
  ngOnInit(): void {
    this.fillSelects();
    this.FormBuilding();
  }

  fillSelects(){
    this.brandService.getAllRecords().subscribe(
      data => {
        this.brandList = data;
        
        setTimeout(initSelect(),1000);   
      },
      error => {
        showMessage('Error al guardar la Información..');
      }
    );
    this.categoryService.getAllRecords().subscribe(
      data => {
        this.categoryList = data;
        setTimeout(initSelect(),1000);    
      },
      error => {
        showMessage('Error al guardar la Información..');
      }
    );
  }
  //validaciones de campos -- fields
  FormBuilding(){
    this.fgValidator = this.fb.group({
      code: ['',[Validators.required, Validators.minLength(this.codeMinLength)]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      brandId: ['', [Validators.required]],

    });
  }

  saveNewRecordFn(){
    if (this.fgValidator.invalid) {
      showMessage('Invalid form');
    }else{
      let model = this.getCustomerData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          console.log(data);
          showMessage('Producto registrada Correctamente.!!');
          this.router.navigate(['/products/product-list']);
        },
        error => {
          showMessage('Error al guardar la Información..');
        }
      );
    }
  }

  getCustomerData(): ProductModelCombinadas{
    let model = new ProductModelCombinadas();
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    model.price = parseInt(this.fgv.price.value);
    model.description = this.fgv.description.value;
    model.stock = parseInt(this.fgv.stock.value);
    model.rate = parseInt(this.fgv.rate.value);
    model.categoryId = this.fgv.categoryId.value;
    model.brandId = this.fgv.brandId.value;
    return model;
  } 

  get fgv(){
    return this.fgValidator.controls;
  }

}
