import { Component, OnInit } from '@angular/core';
import { AuthService } from '@cluntor/users';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  public items: MenuItem[];

  constructor(private authServie: AuthService){

  }

  ngOnInit(): void {
     this.items = [
      {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/'},
      {label: 'Products', icon: 'pi pi-fw pi-briefcase', routerLink: 'products'},
      {label: 'Categories', icon: 'pi pi-fw pi-list', routerLink: 'categories'},
      {label: 'Orders', icon:'pi pi-fw pi-shopping-cart', routerLink: 'orders' },
      {label: 'Users', icon: 'pi pi-fw pi-users', routerLink: 'users'},
      {label: 'Logout', icon: 'pi pi-fw pi-sign-out', command: () => this.logout() }
     ];
  }

  logout(){
    this.authServie.logout();
  }

}
