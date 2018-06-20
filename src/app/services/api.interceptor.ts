import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {CurrentUserService} from './user.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(private user: CurrentUserService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth_req = req.clone();
    if (!req.url.includes('oauth/token')) {
      auth_req = req.clone({
        headers: req.headers.set('Authorization', this.user.getToken())});
    }
    return next.handle(auth_req);
  }
}
