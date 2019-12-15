import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RegisterResponse {
  token: string;
  firstName: string;
  lastName: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3000/api/';
  appUserUrl = 'appUsers/';
  firstName = '';
  isLoggedIn = false;

  constructor(private http: HttpClient) { }


  registerUser(userCredentials) {
    return this.http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }
}
