import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '@env/enviroment';
import { Login } from '../models/auth';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = `${enviroment.apiURL}/user`;

  constructor(
    private http: HttpClient,
    private localstorageService: LocalstorageService,
    private router: Router,
    public messageService: MessageService
  ) {}

  login(data: Login) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  logout() {
    this.localstorageService.removeToken();
    this.router.navigateByUrl('/login');
  }
}
