import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";

import {InputTextModule} from 'primeng/inputtext';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import { UiModule } from '@cluntor/ui';
import {SkeletonModule} from 'primeng/skeleton';

const primengModules = [
  InputTextModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  SkeletonModule
];

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ...primengModules,
    UiModule
  ]
})

export class HomePageModule { };