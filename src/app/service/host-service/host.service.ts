import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private baseUrl = 'http://localhost:8080/waffle/api/v1/hosts';

  constructor(private http: HttpClient) { }

  getHost(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getHostsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
