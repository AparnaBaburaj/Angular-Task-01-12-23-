import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SeviceService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  createRecord(recordData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/records`, recordData);
  }

  getRecords(): Observable<any> {
    return this.http.get(`${this.apiUrl}/records`);
  }


}
