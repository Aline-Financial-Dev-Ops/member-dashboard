import {Injectable} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaginatedResponse} from '@core/models/paginated-response.model';
import {AccountResponse} from '@core/models/account-response.model';
import {BaseHttpService} from '@core/services/base-http.service';

@Injectable({
  providedIn: CoreModule
})
export class AccountService extends BaseHttpService {

  constructor(private client: HttpClient) {
    super();
  }

  getAccounts(memberId: number): Observable<PaginatedResponse<AccountResponse>> {
    return this.client
      .get<PaginatedResponse<AccountResponse>>(this.getApi(`/members/${memberId}/accounts`));
  }

}
