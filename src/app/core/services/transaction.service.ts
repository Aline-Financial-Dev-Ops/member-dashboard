import {Injectable} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {BaseHttpService} from '@core/services/base-http.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TransactionsPage} from '@core/models/transactions-page.model';

@Injectable({
  providedIn: CoreModule
})
export class TransactionService extends BaseHttpService {

  constructor(private client: HttpClient) {
    super();
  }

  getTransactionsByMemberId(memberId: number): Observable<TransactionsPage> {
    return this.client.get<TransactionsPage>(this.getApi(`/members/${memberId}/transactions`));
  }

  getTransactionsByAccountId(accountId: number): Observable<TransactionsPage> {
    return this.client.get<TransactionsPage>(this.getApi(`/accounts/${accountId}/transactions`));
  }

}
