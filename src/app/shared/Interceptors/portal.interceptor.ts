import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionDataService } from 'src/app/core/services/sessionDataService';
import { AppSettings } from '../../settings'

@Injectable()
export class PortalInterceptor implements HttpInterceptor {
  constructor(
    private sessionDataService: SessionDataService
  ) { 
  }

  ngOnInit() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(
      request.clone({
        //headers: request.headers.append('costumer-solutions-auth-token','Bearer ' + this.sessionDataService.getTokenValue())
      })
    );
  }
}
