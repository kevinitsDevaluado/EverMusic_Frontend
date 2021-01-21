import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsConfig } from 'src/app/config/forms-config';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { CategoryModel } from 'src/app/models/parameters/categori.model';
import { ProductModel } from 'src/app/models/products/product.model';
import { BrandService } from 'src/app/services/parameters/brand.service';
import { CategoryService } from 'src/app/services/parameters/category.service';
import { ProductService } from 'src/app/services/products/product.service';

declare const initSelect: any;
declare const showMessage: any;
declare const showMessageB: any;


@Component({
  selector: 'app-product-edition',
  templateUrl: './product-edition.component.html',
  styleUrls: ['./product-edition.component.css']
})
export class ProductEditionComponent implements OnInit {
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
    this.getAllCategories();
    this.getAllBrand();
    this.FormBuilding();
    this.fillFields();
  }
  fillFields(){
    let id = this.route.snapshot.params["id"];
    this.service.getRecordById(id).subscribe(
      data => {
        this.fgv.id.setValue(data.id);
        this.fgv.code.setValue(data.code);
        this.fgv.name.setValue(data.name);
        this.fgv.price.setValue(data.price);
        this.fgv.description.setValue(data.description);
        this.fgv.stock.setValue(data.stock);
        this.fgv.rate.setValue(data.rate);
        this.fgv.categoryId.setValue(data.categoryId);
        this.fgv.brandId.setValue(data.brandId);
      },
      error => {
        showMessage('Información no Encontrada');
        this.router.navigate(['/products/product-list'])
      }
    );
  }
  getAllCategories(){
    this.brandService.getAllRecords().subscribe(
      data => {
        this.brandList = data;
        
        setTimeout(initSelect(),1000);   
      },
      error => {
        showMessage('Error al guardar la Información..');
      }
    );
    
  }
  getAllBrand(){
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
      id: ['',[Validators.required]],
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

  editRecordFn(){
    if (this.fgValidator.invalid) {
      showMessage('Invalid form');
    }else{
      let model = this.getRecordData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage('El producto fue Editado con Éxito.');
          this.router.navigate(['/products/product-list']);
        },
        error => {
          showMessage('Error al guardar la Información..');
        }
      );
    }
  }

  getRecordData(): ProductModel{
    let model = new ProductModel();
    model.id = this.fgv.id.value;
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
