import {Component, OnInit} from '@angular/core';
import {AuthService} from '@core/services/auth.service';
import {AccountService} from '@core/services/account.service';
import {AccountResponse} from '@core/models/account-response.model';
import {map} from 'rxjs/operators';
import {TransactionsPage} from '@core/models/transactions-page.model';
import {TransactionService} from '@core/services/transaction.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  accounts?: AccountResponse[];
  transactionsPage?: TransactionsPage;

  constructor(private authService: AuthService,
              private accountService: AccountService,
              private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(
      user => {
        if (user) {
          this.accountService.getAccounts(user.memberId)
            .pipe(map(accounts => accounts.content))
            .subscribe(accounts => this.accounts = accounts);
          this.transactionService.getTransactionsByMemberId(user.memberId)
            .subscribe(page => this.transactionsPage = page);
        }
      }
    );
  }

}
