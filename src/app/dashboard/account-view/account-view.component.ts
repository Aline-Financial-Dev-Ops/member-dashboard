import {Component, Input} from '@angular/core';

export type AccountViewType = 'full' | 'preview' | 'list';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.sass']
})
export class AccountViewComponent {

  @Input()
  viewType: AccountViewType = 'full';

  constructor() { }

}
