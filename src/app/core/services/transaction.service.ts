import {Injectable} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {BaseHttpService} from '@core/services/base-http.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TransactionsPage} from '@core/models/transactions-page.model';
import {PageParams} from '@core/models/paginated-response.model';

@Injectable({
  providedIn: CoreModule
})
export class TransactionService extends BaseHttpService {

  constructor(private client: HttpClient) {
    super();
  }

  getTransactionsByMemberId(memberId: number, params: PageParams = {sort: 'date'}): Observable<TransactionsPage> {
    return this.client.get<TransactionsPage>(this.getApi(`/members/${memberId}/transactions`),
      {params});
  }

  getTransactionsByAccountId(accountId: number, params: PageParams = {sort: 'date'}): Observable<TransactionsPage> {
    return this.client.get<TransactionsPage>(this.getApi(`/accounts/${accountId}/transactions`),
      {params});
  }

}
