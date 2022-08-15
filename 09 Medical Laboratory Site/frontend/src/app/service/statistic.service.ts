import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  apiUrl: string = environment.apiUrl;

  getCount(endPoint: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}statistic/${endPoint}`);
  }


  constructor(
    private http: HttpClient
  ) { }
}
