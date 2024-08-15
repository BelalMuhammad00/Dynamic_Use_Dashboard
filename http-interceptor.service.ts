import { Injectable } from '@angular/core';
import { LoadingService } from './Services/loading.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();

    return next.handle(req).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

}
