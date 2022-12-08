import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UiModule } from '@cluntor/ui';

import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderModule } from './shared/header/header.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m=> m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListModule)
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    UiModule,
    BrowserAnimationsModule,
    ButtonModule,
    HeaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
