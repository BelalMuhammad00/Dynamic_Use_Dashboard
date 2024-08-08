import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUsers(page:number) : Observable<any>{
   return this._http.get(`https://reqres.in/api/users?page=${page}`)
  }

  getUserDetails(id:number):Observable<any>{
return this._http.get(`https://reqres.in/api/users/${id}`);
  }
}
