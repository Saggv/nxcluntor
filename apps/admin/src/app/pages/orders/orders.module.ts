import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrdersComponent } from './orders.component';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { EditorModule } from 'primeng/editor';
import { InputSwitchModule } from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import {PasswordModule} from 'primeng/password'
import {FieldsetModule} from 'primeng/fieldset';
import { OrderDetailComponent } from './detail/detail.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';

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
  ToastModule,
  TagModule,
  FieldsetModule,
  PasswordModule,
  CascadeSelectModule
];

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
  {
    path: ':id',
    component: OrderDetailComponent
  }
];

@NgModule({
  declarations: [OrdersComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...primegnComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class OrdersModule {}
