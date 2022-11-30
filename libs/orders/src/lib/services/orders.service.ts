import { Injectable } from "@angular/core";
import { enviroment } from '@env/enviroment';
import { HttpClient } from "@angular/common/http";

import { Order } from "../models/order";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService{
  baseUrl = `${enviroment.apiURL}/order`;
  constructor(
    private http: HttpClient
  ){}

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl);
  }

  getOrder(id: string): Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}/${id}`);
  }

  addOrder(data: any): Observable<Order>{
    return this.http.post<Order>(`${this.baseUrl}/`, data)
  }

  updateOrderStatus(data: any, id: string){
    return this.http.put(`${this.baseUrl}/${id}`, data)
  }

  deleteOrder(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getTotalOrder(){
    return this.http.get(`${this.baseUrl}/get/count`)
  }

  getTotalSales(){
    return this.http.get(`${this.baseUrl}/get/totalSales`)
  }
}