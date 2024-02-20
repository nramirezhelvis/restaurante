import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  api:string = "http://localhost:8080/restaurante/productAviable";

  constructor(private httpClient: HttpClient) { }
  
}
