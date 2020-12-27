import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/models/parameters/categori.model';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  entity = 'category';
  token: String = '';
  constructor(private http: HttpClient, private  securityService: SecurityService) {
    this.token = this.securityService.getToken();
   }
    
    /**
   * 
   * @param customer METODO PARA ENVIAR LOS DATOS A NUESTRO SERVIDOR
   */
  getAllRecords(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${this.entity}`);
  }

  getRecordById(id :String): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.entity}/${id}`);
  }
  /**
   * 
   * @param record SAVE COTEGORY
   */
  saveNewRecord(record: CategoryModel): Observable<CategoryModel>{
    return this.http.post<CategoryModel>(`${this.entity}`,record,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
  }
  /**
   * 
   * @param record EDIT CATEGORY
   */
  EditRecord(record: CategoryModel): Observable<CategoryModel>{
    return this.http.put<CategoryModel>(`${this.entity}`,record,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
  /**
   * 
   * @param recordId DELETE RECORD CATEGORY
   */
  DeleteRecord(recordId: String): Observable<any>{
    return this.http.put<CategoryModel>(`${this.entity}/${recordId}`,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
  }
}
