import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/models/parameters/categori.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  entity = 'category';
  constructor(private http: HttpClient) { }

    /**
   * 
   * @param customer METODO PARA ENVIAR LOS DATOS A NUESTRO SERVIDOR
   */
  getAllRecords(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${this.entity}`);
  }
  saveNewRecord(record: CategoryModel): Observable<CategoryModel>{
    return this.http.post<CategoryModel>(`${this.entity}`,record,{
      headers: new HttpHeaders({

      })
    });
  }
}
