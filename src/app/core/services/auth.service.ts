import {Injectable} from '@angular/core';
import {BaseHttpService} from '@core/services/base-http.service';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Credentials} from '@core/models/credentials.model';
import {Observable, throwError} from 'rxjs';
import {CoreModule} from '@core/core.module';
import {catchError} from 'rxjs/operators';
import {JwtService} from '@core/services/jwt.service';
import {UserResponse} from '@core/models/user-response.model';

@Injectable({
  providedIn: CoreModule
})
export class AuthService extends BaseHttpService {

  currentUser?: Observable<UserResponse>;

  constructor(private client: HttpClient, private jwtService: JwtService) {
    super();
  }

  login(credentials: Credentials,
        successHandler?: (response: HttpResponse<any>) => void,
        unauthorizedHandler?: (err: HttpErrorResponse) => Observable<never>): void {
    this.client.post(this.getApi('/login'), credentials, {
      observe: 'response'
    }).pipe(catchError(err => unauthorizedHandler ? unauthorizedHandler(err) : throwError(err)))
      .subscribe(
      res => {
        const token = res.headers.get('Authorization');
        this.jwtService.saveJwt(token!);
        if (successHandler) successHandler(res);
      }
    );
  }

  logout(): void {
    this.jwtService.deleteJwt();
    if (this.currentUser) {
      this.currentUser = undefined;
    }
  }

  isLoggedIn(): boolean {
    if (this.jwtService.getJwt()) {
      return this.jwtService.isValid();
    }
    return false;
  }

  getCurrentUser(): Observable<UserResponse> {
    if (this.currentUser) {
      return this.currentUser;
    }
    return this.client.get<UserResponse>(this.getApi('/users/current'));
  }

}
