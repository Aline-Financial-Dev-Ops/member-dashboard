import {Component, Input} from '@angular/core';
import {TransactionsPage} from '@core/models/transactions-page.model';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.sass']
})
export class TransactionsViewComponent {

  @Input()
  transactionsPage?: TransactionsPage;

  constructor() { }

}
