import { Component, OnInit } from '@angular/core';
import { OrdersService } from '@cluntor/orders';
import { ProductsService } from '@cluntor/products';
import { UsersService } from '@cluntor/users';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalUser: number;
  totalProduct: number;
  totalOrder: number;
  totalSales: number;

  constructor(
    private userService: UsersService,
    private productService: ProductsService,
    private orderService: OrdersService
  ) {}

  ngOnInit(): void {
    this.userService
      .getTotalUser()
      .subscribe((data: any) => (this.totalUser = data.count));

    this.productService
      .getTotalProducts()
      .subscribe((data: any) => (this.totalProduct = data.count));

    this.orderService
      .getTotalOrder()
      .subscribe((data: any) => (this.totalOrder = data.order));

    this.orderService
      .getTotalSales()
      .subscribe((data: any) => (this.totalSales = data.totalSales));
  }
}
