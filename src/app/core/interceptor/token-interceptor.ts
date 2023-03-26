import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const currentUser = this.loginService.obtenerDatos()

    if (currentUser && currentUser.token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${currentUser.token}`)
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
