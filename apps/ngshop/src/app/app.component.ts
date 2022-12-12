import { Component, OnInit } from '@angular/core';
import { CartService } from '@cluntor/orders';

@Component({
  selector: 'cluntor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngshop';
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getCart()
  }
}
