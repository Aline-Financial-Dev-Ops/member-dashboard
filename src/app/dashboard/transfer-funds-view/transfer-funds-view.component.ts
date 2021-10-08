import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AccountResponse} from '@core/models/account-response.model';
import {TransferFundsRequest} from '@core/models/transfer-funds-request.model';
import {TransactionsViewComponent} from '@dashboard/transactions-view/transactions-view.component';

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

  @Input()
  transactionsView?: TransactionsViewComponent;

  @Output()
  reloadAccounts = new EventEmitter<any>();

  constructor() {
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
    console.log(request);
    // this.service.transferFunds(request)
    //   .subscribe(() => {
    //     this.resetFields();
    //     this.refreshTransactionsComponent();
    //     this.reloadAccounts.emit();
    //   });
  }

  transferAmountTooMuch() {
    return this.transferAmount > (this.fromAccount?.type! === 'CHECKING' ?
      this.fromAccount?.availableBalance! / 100 :
      this.fromAccount?.balance! / 100);
  }

  resetFields() {
    this.transferAmount = 0;
    this.fromAccount = undefined;
    this.toAccount = undefined;
  }

  refreshTransactionsComponent() {
    console.log('Refresh transactions...');
    this.transactionsView?.loadPage();
  }

}
