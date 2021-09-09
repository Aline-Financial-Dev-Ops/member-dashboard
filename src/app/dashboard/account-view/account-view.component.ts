import {Component, Input} from '@angular/core';
import {AccountResponse} from '@core/models/account-response.model';

export type AccountViewType = 'full' | 'preview' | 'list';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.sass']
})
export class AccountViewComponent {

  @Input()
  viewType: AccountViewType = 'full';

  @Input()
  account!: AccountResponse;

  @Input()
  link = false;

  constructor() { }

}
