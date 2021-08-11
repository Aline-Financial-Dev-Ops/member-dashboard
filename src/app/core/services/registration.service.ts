import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseHttpService} from '@core/services/base-http.service';
import {CoreModule} from '@core/core.module';
import {UserRegistration} from '@core/models/user-registration.model';
import {Observable} from 'rxjs';
import {UserResponse} from '@core/models/user-response.model';

/**
 * Registration Service
 * <p>Used to supply registration components with API calls.</p>
 */
@Injectable({
  providedIn: CoreModule
})
export class RegistrationService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Registers a user when the UserResponse Observable is
   * subscribed to.
   * @param registration The registration model used
   *        as a request body for the POST call.
   */
  registerUser(registration: UserRegistration): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.getApi('/users/registration'), registration);
  }

}
