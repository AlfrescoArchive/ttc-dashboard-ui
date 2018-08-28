import { Component, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { KeycloakService } from '../keycloak.service';
import { Observable } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-token-interceptor',
  templateUrl: './token-interceptor.component.html',
  styleUrls: ['./token-interceptor.component.css']
})
@Injectable()
export class TokenInterceptorComponent implements HttpInterceptor {


  constructor(private auth: KeycloakService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.auth.getToken() || '';
    request = request.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + authToken
      }
    });
    return next.handle(request);
  }

}


