import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class IntersiptorService implements HttpInterceptor {

  constructor( public _loaderService:LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.isLoading.next(true);
      return next.handle(req).pipe(
        finalize(
          ()=>{
            this._loaderService.isLoading.next(false);
          }
        ) 
      )
  }
}
