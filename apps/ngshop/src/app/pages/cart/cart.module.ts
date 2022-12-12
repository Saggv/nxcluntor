import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import {CardModule} from 'primeng/card';
import { CartPageComponent } from "./cart.component";

const primengModules = [
  ButtonModule,
  CardModule,
];

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent
  }
]

@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ...primengModules
  ]
})

export class CartPageModule { };