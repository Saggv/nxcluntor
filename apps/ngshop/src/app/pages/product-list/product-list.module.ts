import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { UiModule } from '@cluntor/ui';


import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ProductDetailComponent } from './detail/detail.component';
import {GalleriaModule} from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import {SelectButtonModule} from 'primeng/selectbutton';
import {AccordionModule} from 'primeng/accordion';

const primengModules = [
  CardModule,
  ButtonModule,
  CheckboxModule,
  RippleModule,
  GalleriaModule,
  InputTextModule,
  TagModule,
  SelectButtonModule,
  AccordionModule
];

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  },
  {
    path: 'category/:categoryId',
    component: ProductListComponent
  },
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...primengModules,
    FormsModule,
    UiModule
  ]
})

export class ProductListModule {};