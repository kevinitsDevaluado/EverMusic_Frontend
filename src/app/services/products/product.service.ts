import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { ProductModel } from 'src/app/models/products/product.model';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  entity = 'http://localhost:3000/product';
  token: String = '';
  filter: String = '?filter={"include":[{"relation":"category"},{"relation":"brand"},{"relation":"images"}]}';
  constructor(private http: HttpClient, private  securityService: SecurityService) {
    this.token = this.securityService.getToken();
   }
    
    /**
   * 
   * @param customer METODO PARA ENVIAR LOS DATOS A NUESTRO SERVIDOR
   */
  getAllRecords(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.entity}/${this.filter}`);
  }

  getRecordById(id :String): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.entity}/${id}`);
  }
  /**
   * 
   * @param record SAVE COTEGORY
   */
  saveNewRecord(record: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>(`${this.entity}`,record,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
  }
  /**
   * 
   * @param record EDIT CATEGORY
   */
  EditRecord(record: ProductModel): Observable<ProductModel>{
    return this.http.put<ProductModel>(`${this.entity}/${record.id}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
  /**
   * 
   * @param recordId DELETE RECORD CATEGORY
   */
  DeleteRecord(recordId: String): Observable<any>{
    return this.http.delete<ProductModel>(`${this.entity}/${recordId}`,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
  }

}
