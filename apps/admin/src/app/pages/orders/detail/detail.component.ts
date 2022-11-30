import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService } from '@cluntor/orders';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'order-details',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  order: Order;
  id: string;
  status: string;

  orderStatus = [
    {
      label: 'Pending',
      value: 'primary'
    },
    {
      label: 'Processed',
      value: 'warning'
    },
    {
      label: 'Shipped',
      value: 'warning'
    },
    {
      label: 'Delivered',
      value: 'success'
    },
    {
      label: 'Failed',
      value: 'danger'
    },
  ]

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params?.['id']) {
        this.id = params?.['id'];

        this.ordersService.getOrder(this.id).subscribe((data) => {
          this.order = data;
          this.status = this.order.status
        });
      }
    });
  }

  changeStatus(e: any){
    this.ordersService.updateOrderStatus(e.value, this.id).subscribe(()=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Update Order Status Successfully',
      });
    })
  }

}
