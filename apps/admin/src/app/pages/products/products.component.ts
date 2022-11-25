import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {ProductsService } from '@cluntor/products'
import { Product } from "libs/products/src/lib/models/products";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
  products: Product[] =[];

  constructor(
    private productsService: ProductsService,
    private route: Router,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
    this.productsService.getProducts().subscribe(data => {
        this.products = data
    })
  }

  redirectToAddNew(){
    this.route.navigateByUrl('/products/new')
  }

  updateProduct(id: string){
    this.route.navigateByUrl(`/products/new/${id}`);
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Update Product Successfully',
      });
      this.getProducts()
    })
  }
}