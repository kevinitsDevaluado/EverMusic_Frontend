import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from '../models/customer.model';
import {ServiceConfig} from '../config/service-config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  entity = 'customer';
  constructor(
    private http: HttpClient
  ) { }
  /**
   * 
   * @param customer METODO PARA ENVIAR LOS DATOS A NUESTRO SERVIDOR
   */
  CustomerRegistering(customer: CustomerModel): Observable<CustomerModel> {
    return this.http.post<CustomerModel>(`${this.entity}`,customer,{
      headers : new HttpHeaders({})
  });
  }
}
