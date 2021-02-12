import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { itemSaleModels } from 'src/app/models/item-sale/item-sale.models';
import { ShoppingCartModels } from 'src/app/models/item-sale/shopping-card.models';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductModelCombinadas } from 'src/app/models/products/product.modelcombinada';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  entity = 'http://localhost:3000/product';
  sale = 'http://localhost:3000/saleItem';
  cuerda = 'http://localhost:3000/product?filter={"where":{"categoryId":"5fdcd7166f585f25743cb1a3"},"include":[{"relation":"category"},{"relation":"brand"},{"relation":"images"}]}';
  
  viento = 'http://localhost:3000/product?filter={"where":{"categoryId":"6009bbdaa650a9234488533e"},"include":[{"relation":"category"},{"relation":"brand"},{"relation":"images"}]}';
  persecusion = 'http://localhost:3000/product?filter={"where":{"categoryId":"6009bbeaa650a9234488533f"},"include":[{"relation":"category"},{"relation":"brand"},{"relation":"images"}]}';
  instrumentosElectricos = 'http://localhost:3000/product?filter={"where":{"categoryId":"6009bbf6a650a92344885340"},"include":[{"relation":"category"},{"relation":"brand"},{"relation":"images"}]}';
  
  
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
  
  getAllCuerda(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.cuerda}`);
  }
  getAllViento(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.viento}`);
  }
  getAllPersecusion(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.persecusion}`);
  }
  getAllInstrumentosElectricos(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.instrumentosElectricos}`);
  }

  getAllRecordShopping(): Observable<itemSaleModels[]> {
    return this.http.get<itemSaleModels[]>(`${this.sale}`);
  }
  
  getRecordById(id :String): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.entity}/${id}${this.filter}`);
  }
  /**
   * 
   * @param record SAVE COTEGORY
   */
  saveNewRecord(record: ProductModelCombinadas): Observable<ProductModelCombinadas>{
    return this.http.post<ProductModelCombinadas>(`${this.entity}`,record,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
  }
  saleItemShoppingCard(record: itemSaleModels): Observable<itemSaleModels>{
    return this.http.post<itemSaleModels>(`${this.sale}`,record,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  addToShoppingCart(cartId, productId) {
    return this.http.post<ProductModel>(`${ServiceConfig.BASE_URL}${this.entity}`, {
      productId: productId,
      cartId: cartId
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  /**
   * 
   * @param record EDIT CATEGORY
   */
  EditRecord(record: ProductModelCombinadas): Observable<ProductModelCombinadas>{
    return this.http.put<ProductModelCombinadas>(`${this.entity}/${record.id}`, record, {
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
    return this.http.delete<ProductModelCombinadas>(`${this.entity}/${recordId}`,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
  }

  

}
