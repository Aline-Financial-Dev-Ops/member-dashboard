import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {GlobalModalService} from '@app/global-modal/global-modal.service';
import {catchError} from 'rxjs/operators';
import {environment} from '@environments/environment';

const ignoreRequestApiEndpoints: string[] = [
  '/users/password-reset-otp'
];

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private modal: GlobalModalService
  ) {}

  handleError(error: HttpErrorResponse): Observable<never> {

    if (error.status === 0) {
      this.modal.show({
        title: 'We got nothing...',
        message: 'We didn\'t receive a response. You may have lost your connection.'
      });
    } else {
      console.error(`Something went wrong. ${error.error}`);
    }

    return throwError(error.error);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }

  getEndpoint(url: string): string {
    return url.replace(environment.application.api, '');
  }
}
