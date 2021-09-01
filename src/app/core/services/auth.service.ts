import {Injectable} from '@angular/core';
import {BaseHttpService} from '@core/services/base-http.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
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

  login(credentials: Credentials, unauthorizedHandler?: (err: HttpErrorResponse) => Observable<never>): void {
    this.client.post(this.getApi('/login'), credentials, {
      observe: 'response'
    }).pipe(catchError(err => unauthorizedHandler ? unauthorizedHandler(err) : throwError(err)))
      .subscribe(
      res => {
        const token = res.headers.get('Authorization');
        this.jwtService.saveJwt(token!);
      }
    );
  }

  logout(): void {
    this.jwtService.deleteJwt();
  }

  getCurrentUser(): Observable<UserResponse> {
    if (this.currentUser) {
      return this.currentUser;
    }
    return this.client.get<UserResponse>(this.getApi('/users/current'));
  }

}
