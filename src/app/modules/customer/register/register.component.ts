import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

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


  constructor(private fb: FormBuilder, private service: CustomerService, private router: Router) { }
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
    }else{
      let model = this.getCustomerData();
      this.service.CustomerRegistering(model).subscribe(
        data => {
          showMessage('Register Successful, you can find password in your email inbox.');
          this.router.navigate(['/security/login']);
        },
        error => {
          showMessage('Error registering..');
        }
      );
    }
  }

  getCustomerData(): CustomerModel{
    let model = new CustomerModel();
    model.address = this.fgv.address.value;
    model.city = this.fgv.city.value;
    model.document = this.fgv.document.value;
    model.email = this.fgv.email.value;
    model.lastname = this.fgv.lastname.value;
    model.name = this.fgv.name.value;
    model.phone = this.fgv.phone.value;

    return model;

  } 

  get fgv(){
    return this.fgValidator.controls;
  }

}
