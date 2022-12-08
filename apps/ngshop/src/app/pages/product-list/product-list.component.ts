import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, Category, ProductsService } from '@cluntor/products';
import { Product } from 'libs/products/src/lib/models/products';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'cluntor-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  isDetailPage: boolean;
  isCategoryPage: boolean;

  constructor(
    private productService: ProductsService,
    private categoriesService: CategoriesService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
    private router: Router
    
  ){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    })

    this.route.params.subscribe((param: any) =>{
      console.log(param);
      if(param.id){
          this.isDetailPage = true;
          return;
      }

      if(param.categoryId){
        this.isCategoryPage = true;
        this.getProducts([param.categoryId])
        return;
      }

      this.getProducts()
    })
  }


  private getProducts(params?: Array<string | undefined>){
    this.productService.getProducts(params).subscribe(data => {
      this.products = data;
    })
  }

  onFilter(e: any){
    const selectedCategories: Array<string | undefined>= this.categories.filter(category => category.checked).map(category => category._id);
    this.getProducts(selectedCategories);
  }

  redirectToDetail(id: string){
    this.router.navigateByUrl(`/products/${id}`);
  }
}
