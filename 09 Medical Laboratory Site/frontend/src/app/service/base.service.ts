import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {_id: string , [key: string]: any}> {
  apiUrl: string = environment.apiUrl;
  entityName: string = '';

  constructor(public http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(_id: string | null): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entityName}/${_id}`);
  }

  getNames(endPoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endPoint}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${this.entityName}`, entity);
  }

  update(entity: T): Observable<T> {
    return this.http.put<T>(
      `${this.apiUrl}${this.entityName}/${entity._id}`,
      entity
    );
  }

  delete(_id: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${this.entityName}/${_id}`);
  }
}
