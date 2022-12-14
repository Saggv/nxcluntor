import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { FormDialogComponent } from './form-dialog/form.component';
import { InvalidErrorComponent } from './form-dialog/validator/validator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CardModule } from 'primeng/card';
import { ProductItemComponent } from './product/product.component';
import {BadgeModule} from 'primeng/badge';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';

const primengModules = [
  ButtonModule,
  InputTextModule,
  ColorPickerModule,
  CardModule,
  BadgeModule
];

@NgModule({
  declarations: [
    BannerComponent,
    SliderComponent,
    FormDialogComponent,
    InvalidErrorComponent,
    ProductItemComponent,
    CartBadgeComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModules,
  ],
  exports: [BannerComponent, SliderComponent, ProductItemComponent, CartBadgeComponent],
})
export class UiModule {}
