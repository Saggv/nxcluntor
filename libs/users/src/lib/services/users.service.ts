import { Injectable } from "@angular/core";
import { enviroment } from '@env/enviroment';
import { HttpClient } from "@angular/common/http";

import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  baseUrl = `${enviroment.apiURL}/user`;
  constructor(
    private http: HttpClient
  ){}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }

  getUser(id: string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  addUser(data: FormData): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/register`, data)
  }

  updateUser(data: FormData, id: string){
    return this.http.put(`${this.baseUrl}/${id}`, data)
  }

  deleteUser(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getTotalUser(){
    return this.http.get(`${this.baseUrl}/get/count`);
  }
}