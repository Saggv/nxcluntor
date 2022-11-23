import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '@env/enviroment';
import { Observable } from 'rxjs';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{
  private baseUrl = `${enviroment.apiURL}/category`;

  constructor(
    private http: HttpClient
  ){}

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl);
  }

  addNewCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.baseUrl, category)
  }

  updateNewCategory(category: Category): Observable<Category>{
    return this.http.put<Category>(`${this.baseUrl}/${category._id}`, category)
  }

  deleteCategory(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}