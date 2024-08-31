import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private BASE_URL = environment.API_URL;
  constructor() { }


}
