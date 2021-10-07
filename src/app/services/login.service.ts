import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { user } from '../user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url : string = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}


  getUser() : Observable<user[]>{
    return this.http.get<user[]>(this.url);
  }

}
