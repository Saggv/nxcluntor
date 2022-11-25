import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { EditorModule } from 'primeng/editor';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProductUpdateComponent } from './update/update.component';
import {DropdownModule} from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';

const primegnComponentModule = [
  CardModule,
  TableModule,
  ButtonModule,
  ToolbarModule,
  ImageModule,
  InputTextModule,
  FileUploadModule,
  EditorModule,
  InputSwitchModule,
  DropdownModule,
  ToastModule
];

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'new',
    component: ProductUpdateComponent
  },
  {
    path: 'new/:id',
    component: ProductUpdateComponent
  }
];

@NgModule({
  declarations: [ProductsComponent, ProductUpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...primegnComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ProductsModule {}
