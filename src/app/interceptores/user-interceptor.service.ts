import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptorService implements HttpInterceptor {
  usuario:string="user-request";
  nombre_parametro="user-request";

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonar=req.clone({
      headers: req.headers.append(this.nombre_parametro,this.usuario)
    })
    return next.handle(clonar);
  }
}
