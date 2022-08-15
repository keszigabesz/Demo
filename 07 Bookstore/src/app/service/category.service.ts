import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = `${environment.apiUrl}categories/`;

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.BASE_URL);
  }

  getOne(id: number | string): Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URL}${id}`);
  }

  createOne(category: Category): Observable<any>{
    return this.http.post<Category>(`${this.BASE_URL}`, category, this.httpOptions);
  }

  updateOne(category: Category): Observable<any>{
    //A json server Elméletileg lekezeli, hogyha a id nélkül küldöd rá a módosítást, de nem szép dolog
    const id: number = category.id
    return this.http.put(`${this.BASE_URL}${id}`, category, this.httpOptions);
  }

  deleteOne(category: Category): Observable<any>{
    const id: number = category.id
    return this.http.delete<Category>(`${this.BASE_URL}${id}`);
  }

}
