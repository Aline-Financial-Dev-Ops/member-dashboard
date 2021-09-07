import {Component} from '@angular/core';
import {AuthService} from '@core/services/auth.service';
import {AccountService} from '@core/services/account.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent {

  constructor(private authService: AuthService,
              private accountService: AccountService) {
  }

  async onClick() {
    const user = await this.authService.currentUser.toPromise();
    console.table(user);
    console.log(user!.username);
    const accountsPage = await this.accountService.getAccounts(user!.memberId).toPromise();
    console.log(accountsPage);
  }

}
