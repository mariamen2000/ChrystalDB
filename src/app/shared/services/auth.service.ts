import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: User) {
    return this.http.post<any>(this._loginUrl, user)
  }
}
