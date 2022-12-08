import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CategoriesService,
  Category,
  ProductsService,
} from '@cluntor/products';
import { Product } from 'libs/products/src/lib/models/products';

@Component({
  selector: 'cluntor-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  searchTextValue: string;
  categories: Category[] = [];
  featuredProduts: any = [];

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    this.productService.getFeaturedProduct(4).subscribe((data: any) => {
      this.featuredProduts = data;
    });
  }

  redirectToCategoryPage(id: string) {
    this.router.navigateByUrl(`/products/category/${id}`);
  }
}
