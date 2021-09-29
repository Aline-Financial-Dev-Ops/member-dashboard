import {Component, Input} from '@angular/core';
import {Transaction} from '@core/models/transaction.model';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.sass']
})
export class TransactionRowComponent {

  @Input()
  transaction!: Transaction;

  constructor() { }

}
