import { Injectable } from '@angular/core';
import {BaseHttpService} from '@core/services/base-http.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Credentials} from '@core/models/credentials.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService {

  constructor(private client: HttpClient) {
    super();
  }

  login(credentials: Credentials): Observable<HttpResponse<unknown>> {
    return this.client.post(this.getApi('/login'), credentials, {
      observe: 'response'
    });
  }

}
