import { Component, OnInit } from "@angular/core";
import { CartService } from "@cluntor/orders";
import { Product } from "@cluntor/products";
import { CartItem } from "@cluntor/orders";
import { Router } from "@angular/router";

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartPageComponent implements OnInit{
  cartItems: CartItem[] = [];
  itemsPrice: number;
  shipping = 30;
  constructor(private cartService: CartService, private router: Router){}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(data =>{
      this.cartItems = data;
     this.itemsPrice = this.cartItems.reduce((a: number, b: CartItem) =>{
        let result = a + (b.product.price * b.quantity);
        return result;
      },0)
    })
  }


  increaseCartItem(cartItem: Product ){
    this.cartService.addToCart(cartItem);
  }

  decreaseCartItem(cartItem: Product){
    this.cartService.addToCart(cartItem, -1);
  }

  removeCartItem(id: string){
    this.cartService.deleteCart(id);
  }

  totalPrice(){
    return this.shipping + this.itemsPrice;
  }

  redirectToProducts(){
    this.router.navigateByUrl('/products');
  }

  redirectToProductDetail(id: string){
    this.router.navigateByUrl(`/products/${id}`);
  }
}