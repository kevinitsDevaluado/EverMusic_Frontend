import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormsConfig } from '../../../config/forms-config'

declare const showMessage: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fgValidator!: FormGroup;
  documentMinLength = FormsConfig.DOCUMENT_MIN_LENGTH;
  nameMinLength = FormsConfig.NAMES_MIN_LENGTH;
  lastnameMinLength = FormsConfig.NAMES_MIN_LENGTH;


  constructor(private fb: FormBuilder) { }
  //PERMISOS DE MI FORMULARIO
  ngOnInit(): void {
    this.FormBuilding();
  }
  //validaciones de campos -- fields
  FormBuilding(){
    this.fgValidator = this.fb.group({
      document: ['',[Validators.required, Validators.minLength(this.documentMinLength)]],
      name: ['', [Validators.required, Validators.minLength(this.nameMinLength)]],
      lastname: ['', [Validators.required, Validators.minLength(this.lastnameMinLength)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }
  CustomerRegisterFn(){
    if (this.fgValidator.invalid) {
      showMessage('Invalid form');
      return false;
    }
    alert('register');
    return false;
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
