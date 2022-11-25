import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CategoriesService,
  Category,
  ProductsService,
} from '@cluntor/products';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'product-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [MessageService],
})
export class ProductUpdateComponent implements OnInit {
  form: FormGroup;
  imageDisplay: string | ArrayBuffer | null;
  categories: Category[] = [];
  id: string;

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      countInStock: ['', Validators.required],
      category: ['', Validators.required],
      isFeatured: ['', Validators.required],
      description: ['', Validators.required],
      productDetail: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    this.route.params.subscribe((params) => {
      if (params?.['id']) {
        this.id = params?.['id'];
        this.productsService.getProduct(this.id).subscribe((data) => {
          this.form.patchValue({ ...data, category: data.category?.['_id'] });
          this.imageDisplay = data.image;
        });
      }
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const formData = new FormData();

    Object.keys(this.form.value).forEach((key) => {
      formData.append(key, this.form.value[key]);
    });

    if (this.id) {
      this.productsService
        .updateProduct(formData, this.id)
        .subscribe((data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update Product Successfully',
          });
        });

      return;
    }

    this.productsService.addProduct(formData).subscribe((data) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Add Product Successfully',
      });
    });
  }

  onChangeFile(e: any) {
    const file = e.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image')?.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  redirectToProducts() {
    this.router.navigateByUrl('/products');
  }
}
