import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { LocalstorageService } from './localstorage.service';
import { enviroment } from '@env/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class JWTInterceptorService implements HttpInterceptor {
  constructor(
    private localstorageServive: LocalstorageService,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localstorageServive.getToken();
    const isApiUrl = req.url.startsWith(enviroment.apiURL);

    this.loadingService.show();

    if (token && isApiUrl) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req).pipe(
      finalize(() => this.loadingService.hide()),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('this is server side error');
          errorMsg = `${error.error.message}`;
        }
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: errorMsg,
        });
        return throwError(error);
      })
    );
  }
}
