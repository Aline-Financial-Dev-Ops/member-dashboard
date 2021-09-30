import {Pipe, PipeTransform} from '@angular/core';
import {AccountResponse} from '@core/models/account-response.model';

@Pipe({
  name: 'accountLabel'
})
export class AccountLabelPipe implements PipeTransform {

  transform(account: AccountResponse, visible = false): string {
    const accountNumber = visible ? account.accountNumber :
      `•••${account.accountNumber.substr(account.accountNumber.length - 4)}`;
    return `${account.type} ${accountNumber}`;
  }

}
