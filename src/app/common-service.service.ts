import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private BASE_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getAllProducts(){
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token || '');
    return this.http.get(this.BASE_URL + 'products', { headers });
  }


  addProduct(product: any){
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token || '');
    return this.http.post(this.BASE_URL + 'products', product, { headers });
  }

  updateProduct(product: any){
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token || '');
    return this.http.put(this.BASE_URL + 'products/' + product.id, product, { headers });
  }

  deleteProduct(id: any){
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token || '');
    return this.http.delete(this.BASE_URL + 'products/' + id, { headers });
  }

}
