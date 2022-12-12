import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from '@cluntor/orders';

@Component({
  selector: 'cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit{
  value: number;
  constructor(private cartSevice: CartService, private router: Router){

  }

  ngOnInit(): void {
      this.cartSevice.cart$.subscribe(cart => {
        this.value = cart.length;
      })
  }

  redirectToCartPage(){
    this.router.navigateByUrl('/carts')
  }
}