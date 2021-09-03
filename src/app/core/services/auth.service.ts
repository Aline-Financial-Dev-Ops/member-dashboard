import {Injectable} from '@angular/core';
import {BaseHttpService} from '@core/services/base-http.service';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Credentials} from '@core/models/credentials.model';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {CoreModule} from '@core/core.module';
import {catchError} from 'rxjs/operators';
import {JwtService} from '@core/services/jwt.service';
import {UserResponse} from '@core/models/user-response.model';

@Injectable({
  providedIn: CoreModule
})
export class AuthService extends BaseHttpService {

  private currentUserSubject: BehaviorSubject<UserResponse | null>;

  constructor(private client: HttpClient, private jwtService: JwtService) {
    super();
    this.currentUserSubject = new BehaviorSubject<UserResponse | null>(null);
    this.getCurrentUser();
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
        this.getCurrentUser();
        if (successHandler) successHandler.call(null, res);
      }
    );
  }

  logout(): void {
    this.jwtService.deleteJwt();
    this.currentUserSubject.next(null);
  }

  get isLoggedIn(): boolean {
    if (this.jwtService.getJwt()) {
      return this.jwtService.isValid();
    }
    return false;
  }

  private getCurrentUser(): void {
    this.client.get<UserResponse>(this.getApi('/users/current'))
      .subscribe(user => this.currentUserSubject.next(user));
  }

  get currentUser(): Observable<UserResponse | null> {
    return this.currentUserSubject.asObservable();
  }

}
