import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "@cluntor/orders";
import { Product } from 'libs/products/src/lib/models/products';

@Component({
  selector: 'product-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductItemComponent implements OnInit{
  @Input() product: Product;
  
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }
}