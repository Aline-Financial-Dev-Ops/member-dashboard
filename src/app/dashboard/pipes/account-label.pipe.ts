import {Pipe, PipeTransform} from '@angular/core';
import {AccountResponse} from '@core/models/account-response.model';

@Pipe({
  name: 'accountLabel'
})
export class AccountLabelPipe implements PipeTransform {

  transform(account: AccountResponse): string {
    return `${account.type} ***${account.accountNumber.substr(account.accountNumber.length - 4)}`;
  }

}
