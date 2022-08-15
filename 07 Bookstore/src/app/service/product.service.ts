import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  BASE_URL = `${environment.apiUrl}products/`;

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  getOne(id: number | string): Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}${id}`);
  }

  createOne(product: Product): Observable<any>{
    return this.http.post<Product>(`${this.BASE_URL}`, product, this.httpOptions);
  }

  updateOne(product: Product): Observable<any>{
    //A json server Elméletileg lekezeli, hogyha a id nélkül küldöd rá a módosítást, de nem szép dolog
    const id: number = product.id
    return this.http.put(`${this.BASE_URL}${id}`, product, this.httpOptions);
  }

  deleteOne(product: Product): Observable<any>{
    const id: number = product.id
    return this.http.delete<Product>(`${this.BASE_URL}${id}`);
  }
}
