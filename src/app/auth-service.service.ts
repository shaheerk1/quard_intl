import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string; }) {
    return this.http.post(this.BASE_URL + 'login',credentials);
  }

  getUser(){
    let token = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', token || '');

    return this.http.get(this.BASE_URL + 'getUser', { headers });
  
  }
}
