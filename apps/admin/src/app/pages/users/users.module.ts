import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UserUpdateComponent } from './update/update.component';

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
import {RadioButtonModule} from 'primeng/radiobutton';

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
  PasswordModule,
  RadioButtonModule
];

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'new',
    component: UserUpdateComponent
  },
  {
    path: 'new/:id',
    component: UserUpdateComponent
  }
];

@NgModule({
  declarations: [UsersComponent, UserUpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...primegnComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class UsersModule {}
