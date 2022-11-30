import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';

import { OrdersService, Order } from '@cluntor/orders'

@Component({
  selector: 'admin-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit{
  orders: Order[] =[];

  constructor(
    private OrdersService: OrdersService,
    private route: Router,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
      this.getOrders();
  }

  getOrders(){
    this.OrdersService.getOrders().subscribe(data => {
        this.orders = data
    })
  }

  redirectToAddNew(){
    this.route.navigateByUrl('/orders/new')
  }

  orderDetail(id: string){
    this.route.navigateByUrl(`/orders/${id}`);
  }

  deleteOrder(id: string){
    this.OrdersService.deleteOrder(id).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Delete Order Successfully',
      });
      this.getOrders()
    })
  }
}