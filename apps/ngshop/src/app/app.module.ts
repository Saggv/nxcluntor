import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { NgxStripeModule } from 'ngx-stripe';

import { UiModule } from '@cluntor/ui';

import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderModule } from './shared/header/header.module';

import { PaymentSuccessComponent } from './pages/payment/success/success.component';
import { PaymentFailedComponent } from './pages/payment/failed/failed.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m=> m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'carts',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'payment',
    children: [
      {
        path: 'success',
        component: PaymentSuccessComponent
      },
      {
        path: 'failed',
        component: PaymentFailedComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    FooterComponent,
    PaymentFailedComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    UiModule,
    BrowserAnimationsModule,
    ButtonModule,
    HeaderModule,
    HttpClientModule,
    ToastModule,
    NgxStripeModule.forRoot('pk_test_51Hoje2CohLCE8kRQgOTM3TJJA67yIjO27xOAxbU5j0nRlLsOyGY0MQsoL4rkh95FCoKB63BJ1ywMJhlJRhY4jFuh00hoLbvTTp'),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
