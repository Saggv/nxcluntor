import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

import { UiModule } from '@cluntor/ui';

import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
];

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    DynamicDialogModule,
    FormsModule, ReactiveFormsModule,
    InputTextModule,
    UiModule,
    ToastModule
  ],
})
export class CategoriesModule {}
