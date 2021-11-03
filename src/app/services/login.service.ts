import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { user } from '../user';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:secret')
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url : string = "http://localhost:8080/usersx";

  constructor(private http: HttpClient) {}


  getUser() : Observable<user[]>{
    return this.http.get<user[]>(this.url);
  }

}
