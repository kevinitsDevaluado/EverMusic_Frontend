import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsConfig } from 'src/app/config/forms-config';
import { UserModel } from 'src/app/models/user.models';
import { CustomerService } from 'src/app/services/customer.service';
import { SecurityService } from 'src/app/services/security.service';
import * as CryptoJS from 'crypto-js'
declare const showMessage: any;
declare const initSidenav: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  fgValidator!: FormGroup;
  usernameMinLength = FormsConfig.DOCUMENT_MIN_LENGTH;
  nameMinLength = FormsConfig.NAMES_MIN_LENGTH;
  lastnameMinLength = FormsConfig.NAMES_MIN_LENGTH;


  constructor(
     private fb: FormBuilder,
     private service: SecurityService, 
     private router: Router
     ) { }
  //PERMISOS DE MI FORMULARIO
  ngOnInit(): void {
    this.FormBuilding();
  }
  //validaciones de campos -- fields
  FormBuilding(){
    this.fgValidator = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(this.usernameMinLength)]],
      password: ['', [Validators.required]]
    });
  }
  /**
    * Metodo de validacion de crendenciales del usuario
   */
  LoginCustomerFn(){
    if (this.fgValidator.invalid) {
      showMessage('Invalid form');
    }else{
      let model = this.getLoginData();
      this.service.LoginCustomer(model).subscribe(
        data => {
          console.log(data);
          this.service.saveSessionData(data);
          //sometingh else
          //initSidenav();
          showMessage('Bienvenido..!!');
          this.router.navigate(['/home']);
        },
        error => {
          showMessage('Invalid data.');
        }
      );
    }
  }
  
  /***
   * Get User data in model //  Obtener datos de usuario en el modelo
   */

  getLoginData(): UserModel{
    let model = new UserModel();
    model.username = this.fgv.username.value;
    model.password = CryptoJS.MD5(this.fgv.password.value).toString();

    return model;

  }  
  
  get fgv(){
    return this.fgValidator.controls;
  }

}
