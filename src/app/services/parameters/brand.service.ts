import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  entity = 'brand';
  token: String = '';
  constructor(private http: HttpClient, private  securityService: SecurityService) {
    this.token = this.securityService.getToken();
   }
    
    /**
   * 
   * @param customer METODO PARA ENVIAR LOS DATOS A NUESTRO SERVIDOR
   */
  getAllRecords(): Observable<BrandModel[]> {
    return this.http.get<BrandModel[]>(`${this.entity}`);
  }

  getRecordById(id :String): Observable<BrandModel> {
    return this.http.get<BrandModel>(`${this.entity}/${id}`);
  }
  /**
   * 
   * @param record SAVE COTEGORY
   */
  saveNewRecord(record: BrandModel): Observable<BrandModel>{
    return this.http.post<BrandModel>(`${this.entity}`,record,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
  }
  /**
   * 
   * @param record EDIT CATEGORY
   */
  EditRecord(record: BrandModel): Observable<BrandModel>{
    return this.http.put<BrandModel>(`${this.entity}/${record.id}`, record, {
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
    return this.http.delete<BrandModel>(`${this.entity}/${recordId}`,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
  }

}
