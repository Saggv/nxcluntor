import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '@cluntor/orders';
import { ProductsService } from '@cluntor/products';
import { Product } from 'libs/products/src/lib/models/products';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  images = [
    {
      previewImageSrc:
        'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria1.jpg',
      thumbnailImageSrc:
        'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc:
        'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria2.jpg',
      thumbnailImageSrc:
        'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria2s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc:
        'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria3.jpg',
      thumbnailImageSrc:
        'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria3s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
  ];

  product: Product;
  id: string;
  colorOptions = [
    { label: 'Đen', value: 'black' },
    { label: 'Trắng', value: 'white' },
    { label: 'Vàng', value: 'yellow' },
  ];
  sizeOptions = [
    { label: 'XS < 25KG', value: 'XS < 25KG' },
    { label: 'M: 46 - 53KG', value: 'M: 46 - 53KG' },
    { label: 'L: 53 - 64KG', value: 'L: 53 - 64KG' },
    { label: 'XL: 64 - 75KG', value: 'XL: 64 - 75KG' },
    { label: 'XXL: 75 - 90KG', value: 'XXL: 75 - 90KG' },
  ];
  selectedColor: any;
  selectedSize: any;
  quantity: number = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      if (param.id) {
        this.id = param.id;

        this.productService.getProduct(this.id).subscribe((data) => {
          this.product = data;
        });

        const cartItem = this.cartService.getCartItem(this.id);
        if (cartItem) {
          this.selectedColor = cartItem.product.color;
          this.selectedSize = cartItem.product.size;
          this.quantity = cartItem.quantity;
        }
      }
    });
  }

  increaseQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    if (this.quantity <= 1) return;
    this.quantity -= 1;
  }

  addToCart() {
    if (!this.selectedColor || !this.selectedSize) {
      this.messageService.add({severity:'error', summary:'Please select color or size!'});
      return;
    }
    
    const product = {
      ...this.product,
      size: this.selectedSize,
      color: this.selectedColor,
    };

    this.cartService.addToCart(product, this.quantity);
    this.messageService.add({severity:'success', summary:'Add product to cart successfully!'});
  }
}
