import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private baseUrl = 'http://localhost:8080/waffle/api/v1/hosts';

  constructor(private http: HttpClient) { }

  getHostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getHostsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createHost(host: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, host);
  }

  updateHost(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
