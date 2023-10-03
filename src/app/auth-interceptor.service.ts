import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if (req.url) ...
    console.log('Request is on its way');
    console.log(req.url);
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'zeaz')
    });
    return next.handle(modifiedRequest);
  }
}
