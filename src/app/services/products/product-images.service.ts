import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { ProductImageModel } from 'src/app/models/products/product-image.models';
import { UploadImageModel } from 'src/app/models/products/upload-image.models';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductImagesService {

  entity = 'image';
  token: String = '';
  filter: String = '?filter={"include":[{"relation":"product"}]}';

  constructor(private http: HttpClient, private securityService: SecurityService) {
    this.token = this.securityService.getToken();
  }

  /**
   * Get al records of a collection
   */
  getAllRecords(): Observable<ProductImageModel[]> {
    return this.http.get<ProductImageModel[]>(`${ServiceConfig.BASE_URL}${this.entity}/${this.filter}`);
  }

  /**
   * Get record by id
   * @param id id to search
   */
  getRecordById(id: String): Observable<ProductImageModel> {
    return this.http.get<ProductImageModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
  }


  getRecordsByProductId(productId: String): Observable<ProductImageModel[]> {
    return this.http.get<ProductImageModel[]>(`${ServiceConfig.BASE_URL}/products/${productId}/images`);
  }


  UploadProductImage(formData: FormData, order: number, productId: String): Observable<UploadImageModel> {
    return this.http.post<UploadImageModel>(`${ServiceConfig.BASE_URL}productImage?productId=${productId}&order=${order}`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  DeleteRecord(recordId: String): Observable<any> {
    return this.http.delete(`${ServiceConfig.BASE_URL}/product-image/${recordId}`, {
      headers: new HttpHeaders({ 
        Authorization: `Bearer ${this.token}`
      })
    });
  }
}
