import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { BrowserModule } from '@angular/platform-browser';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { FormDialogComponent } from "./form-dialog/form.component";
import { InvalidErrorComponent } from "./form-dialog/validator/validator.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ColorPickerModule} from 'primeng/colorpicker';

@NgModule({
  declarations: [
    BannerComponent,
    SliderComponent,
    FormDialogComponent,
    InvalidErrorComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    ColorPickerModule
  ],
  exports: [
    BannerComponent,
    SliderComponent
  ]
})
export class UiModule {};