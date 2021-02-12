import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { itemSaleModels } from 'src/app/models/item-sale/item-sale.models';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class SaleItemService {
  entity = 'http://localhost:3000/product';
  sale = 'http://localhost:3000/saleItem';
  cuerda = 'http://localhost:3000/product?filter={"where":{"categoryId":"5fdcd7166f585f25743cb1a3"}}';
  itemShoppingCustomer = ''
  token: String = '';
  filter: String = '?filter={"include":[{"relation":"product"}]}';
  constructor(private http: HttpClient, private  securityService: SecurityService) {
    this.token = this.securityService.getToken();
   }
    
    /**
   * 
   * @param customer METODO PARA ENVIAR LOS DATOS A NUESTRO SERVIDOR
   */
 
  getAllRecordShopping(): Observable<itemSaleModels[]> {
    return this.http.get<itemSaleModels[]>(`${this.sale}/${this.filter}`);
  }
  getRecordById(id :String): Observable<itemSaleModels[]> {
    return this.http.get<itemSaleModels[]>(`${this.sale}/${id}${this.filter}`);
  }
  getRecordByIds(id :String): Observable<itemSaleModels> {
    return this.http.get<itemSaleModels>(`${this.sale}/${id}${this.filter}`);
  }


  getRecordByIdShopping(id :String): Observable<itemSaleModels[]> {
    return this.http.get<itemSaleModels[]>(`${this.sale}?filter={"where":{"shoppingCartId":"${id}"},"include":[{"relation":"product"}]}`);
  }

  saleItemShoppingCard(record: itemSaleModels): Observable<itemSaleModels>{
    return this.http.post<itemSaleModels>(`${this.sale}`,record,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
