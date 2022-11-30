import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  constructor(){}

  setToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken():string{
    let result = '';
    result = localStorage.getItem('token') || '';
    return result;
  }

  removeToken(){
    localStorage.removeItem('token')
  }
}