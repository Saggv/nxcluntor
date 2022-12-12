import { Injectable } from "@angular/core";
import { Product } from "@cluntor/products";
import { BehaviorSubject } from 'rxjs'
import { CartItem } from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService{
  cart$: BehaviorSubject<CartItem[] | any> = new BehaviorSubject([]);

  constructor(){}

  // initCart(){
  //   const cart: CartItem[] = this.getCart();
  //   if(!cart){
  //     const init = {
  //       items: []
  //     }

  //     localStorage.setItem('cart', JSON.stringify(init));
  //   }
  // }

  getCart():CartItem[]{
    const cartAsString: string = localStorage.getItem('cart') || '[]';
    const cart: CartItem[] = JSON.parse(cartAsString);
    this.cart$.next(cart);
    return cart;
  }

  addToCart(product: Product, quantity: number = 1){
    const cart = this.getCart();
    if(!cart){
      const cartItems = [
        {
          product,
          quantity
        }
      ]
      localStorage.setItem('cart', JSON.stringify(cartItems))

      return;
    }

    const isCartItemExisted = cart.find(item => item.product.id === product.id);

    if(isCartItemExisted){
      cart.forEach((item, index) => {
        if(item.product.id === product.id){
          if(item.quantity <= 1 && quantity < 0){
            cart.splice(index, 1);
            return;
          }
          item.quantity = item.quantity + quantity;
        }
      })
    }else{
      cart.push({product, quantity})
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);
  }

  deleteCart(id: string){
    const cart = this.getCart();
    const result = cart.filter(item => item.product.id !== id);

    localStorage.setItem('cart', JSON.stringify(result));
    this.cart$.next(result);
  }

  getCartItem(id: string){
    const cart = this.getCart();
    const result = cart.find(item => item.product.id === id);
    return result;
  }
}