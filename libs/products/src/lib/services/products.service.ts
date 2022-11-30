import { Injectable } from "@angular/core";
import { enviroment } from '@env/enviroment';
import { HttpClient } from "@angular/common/http";

import { Product } from "../models/products";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  baseUrl = `${enviroment.apiURL}/products`;
  constructor(
    private http: HttpClient
  ){}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  addProduct(data: FormData): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, data)
  }

  updateProduct(data: FormData, id: string){
    return this.http.put(`${this.baseUrl}/${id}`, data)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getTotalProducts(){
    return this.http.get(`${this.baseUrl}/get/count`)
  }
}