import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsConfig } from 'src/app/config/forms-config';
import { PasswordResetModel } from 'src/app/models/security/password-reset.model';
import { UserModel } from 'src/app/models/security/user.models';
import { SecurityService } from 'src/app/services/security.service';
declare const showMessage: any;
declare const initSidenav: any;
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

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
      username: ['',[Validators.required, Validators.minLength(this.usernameMinLength)]],
      type: ['', [Validators.required]]
    });
  }
  /**
    * Metodo de validacion de crendenciales del usuario
   */
  PasswordResetFn(){
    if (this.fgValidator.invalid) {
      showMessage('Invalid form');
    }else{
      let model = this.getPasswordData();
      this.service.PasswordReset(model).subscribe(
        data => {
          console.log(data);
          //this.service.saveSessionData(data);
          //sometingh else
          //initSidenav();
          
          if (parseInt(this.fgv.type.value) == 1) {
            showMessage("Tu contraseña a sido cambiada con exito!! se ha enviado a su Teléfono móvil Gracias por Preferirnos");            
          }else{
            showMessage("Tu contraseña a sido cambiada con exito!! se ha enviado a su Correo Electrónico móvil Gracias por Preferirnos");            
          }
          this.router.navigate(['/home']);
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 1000);
          
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

  getPasswordData(): PasswordResetModel{
    let model = new PasswordResetModel();
    model.username = this.fgv.username.value;
    model.type = parseInt(this.fgv.type.value); 

    return model;

  }  
  
  get fgv(){
    return this.fgValidator.controls;
  }

}
