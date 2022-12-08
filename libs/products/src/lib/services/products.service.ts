import { Injectable } from "@angular/core";
import { enviroment } from '@env/enviroment';
import { HttpClient, HttpParams } from "@angular/common/http";

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

  getProducts(listCategories?: Array<string | undefined>): Observable<Product[]>{
    let params = new HttpParams();
    if(listCategories){
      params = params.append('categories', listCategories.join(','))
    }

    return this.http.get<Product[]>(this.baseUrl, {params});
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

  getFeaturedProduct(count: number){
    return this.http.get(`${this.baseUrl}/get/featured/${count}`);
  }
}