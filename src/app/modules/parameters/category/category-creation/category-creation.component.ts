import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsConfig } from 'src/app/config/forms-config';
import { CategoryModel } from 'src/app/models/parameters/categori.model';
import { CategoryService } from 'src/app/services/parameters/category.service';

declare const showMessage: any;

@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.css']
})
export class CategoryCreationComponent implements OnInit {

  fgValidator!: FormGroup;
  codeMinLength = FormsConfig.CODE_MIN_LENGTH;
  nameMinLength = FormsConfig.PARAM_NAME_MIN_LENGTH;
  


  constructor(
    private fb: FormBuilder,
     private service:CategoryService, 
     private router: Router,
     private route: ActivatedRoute
     ) { 
      
     }
  //PERMISOS DE MI FORMULARIO
  ngOnInit(): void {
    this.FormBuilding();
    
  }
  //validaciones de campos -- fields
  FormBuilding(){
    this.fgValidator = this.fb.group({
      code: ['',[Validators.required, Validators.minLength(this.codeMinLength)]],
      name: ['', [Validators.required, Validators.minLength(this.nameMinLength)]]
    });
  }

  saveNewRecordFn(){
    if (this.fgValidator.invalid) {
      showMessage('Invalid form');
    }else{
      let model = this.getCustomerData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage('Categoria registrada Correctamente.!!');
          this.router.navigate(['/parameters/category-list']);
        },
        error => {
          showMessage('Error al guardar la Información..');
        }
      );
    }
  }

  getCustomerData(): CategoryModel{
    let model = new CategoryModel();
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    return model;

  } 

  get fgv(){
    return this.fgValidator.controls;
  }

}
