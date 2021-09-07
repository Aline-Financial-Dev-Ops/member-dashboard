import {Injectable} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseHttpService} from '@core/services/base-http.service';
import {AccountsPage} from '@core/models/accounts-page.model';

@Injectable({
  providedIn: CoreModule
})
export class AccountService extends BaseHttpService {

  constructor(private client: HttpClient) {
    super();
  }

  // Get a paginated response of Accounts
  getAccounts(memberId: number): Observable<AccountsPage> {
    return this.client.get<AccountsPage>(this.getApi(`/members/${memberId}/accounts`));
  }

}
