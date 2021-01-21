import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsConfig } from 'src/app/config/forms-config';
import { ChangePasswordModel } from 'src/app/models/security/change-password.model';
import { SecurityService } from 'src/app/services/security.service';
declare const showMessage: any;
import * as CryptoJS from 'crypto-js'
declare const initSidenav: any;
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  fgValidator!: FormGroup;
  usernameMinLength = FormsConfig.DOCUMENT_MIN_LENGTH;
  nameMinLength = FormsConfig.NAMES_MIN_LENGTH;
  lastnameMinLength = FormsConfig.NAMES_MIN_LENGTH;


  constructor(
     private fb: FormBuilder,
     private service: SecurityService, 
     private router: Router,
     private spinner: NgxSpinnerService
     ) { }
  //PERMISOS DE MI FORMULARIO
  ngOnInit(): void {
    this.FormBuilding();
    this.spinner.show();
  }
  //validaciones de campos -- fields
  FormBuilding(){
    this.fgValidator = this.fb.group({
      currentPassword: ['',[Validators.required]],
      newPassword: ['', [Validators.required]],
      newPassword2: ['', [Validators.required]]
    });
  }
  /**
    * Metodo de validacion de crendenciales del usuario
   */
  ChangePasswordFn(){
    if (this.fgValidator.invalid || this.fgv.newPassword.value != this.fgv.newPassword2.value) {
      showMessage('Invalid form');
    }else{
      let model = this.getPasswordData();
      this.service.ChangePassword(model).subscribe(
        data => {
          console.log(data);
          //this.service.saveSessionData(data);
          //sometingh else
          //initSidenav();
          showMessage("Tu contraseña a sido cambiada con exito!!");            
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

  getPasswordData(): ChangePasswordModel{
    let model = new ChangePasswordModel();
    model.id = this.service.getUserId();
    model.currentPassword = CryptoJS.MD5(this.fgv.currentPassword.value).toString();
    model.newPassword = CryptoJS.MD5(this.fgv.newPassword.value).toString();
    model.newPassword2 = CryptoJS.MD5(this.fgv.newPassword2.value).toString();
    return model;

  }  
  
  get fgv(){
    return this.fgValidator.controls;
  }

}
