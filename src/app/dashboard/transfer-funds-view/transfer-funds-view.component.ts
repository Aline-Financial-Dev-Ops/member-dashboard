import {Component, Input, OnInit} from '@angular/core';
import {AccountResponse} from "@core/models/account-response.model";

export type TransferFundsViewMode = 'quick' | 'account' | 'full';

@Component({
  selector: 'app-transfer-funds-view',
  templateUrl: './transfer-funds-view.component.html',
  styleUrls: ['./transfer-funds-view.component.sass']
})
export class TransferFundsViewComponent implements OnInit {

  @Input()
  mode!: TransferFundsViewMode;

  @Input()
  viewTitle = 'Transfer Money';

  @Input()
  accounts: AccountResponse[] = [];

  transferAmount = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('Transfer funds view.');
  }

}
