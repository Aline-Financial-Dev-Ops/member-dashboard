import {Component, Input} from '@angular/core';
import {AccountResponse} from '@core/models/account-response.model';
import {TransferFundsRequest} from '@core/models/transfer-funds-request.model';
import {TransactionService} from '@core/services/transaction.service';

export type TransferFundsViewMode = 'quick' | 'account' | 'full';

@Component({
  selector: 'app-transfer-funds-view',
  templateUrl: './transfer-funds-view.component.html',
  styleUrls: ['./transfer-funds-view.component.sass']
})
export class TransferFundsViewComponent {

  @Input()
  mode!: TransferFundsViewMode;

  @Input()
  viewTitle = 'Transfer Money';

  @Input()
  accounts!: AccountResponse[]

  transferAmount = 0;
  fromAccount?: AccountResponse;
  toAccount?: AccountResponse;
  memo = '';

  constructor(private service: TransactionService) {
  }

  switchAccounts() {
    const temp = this.fromAccount;
    this.fromAccount = this.toAccount;
    this.toAccount = temp;
  }

  transferFunds() {
    const request: TransferFundsRequest = {
      fromAccountNumber: this.fromAccount!.accountNumber,
      toAccountNumber: this.toAccount!.accountNumber,
      amount: this.transferAmount * 100,
      memo: this.mode == 'quick' ? 'QUICK TRANSFER' : this.memo
    };
    this.service.transferFunds(request)
      .subscribe(response => {
        console.log(response);
      });
  }

}
