import {Component, OnInit} from '@angular/core';
import {DashboardRoutingService} from '@dashboard/dashboard-routing.service';
import {AccountService} from '@core/services/account.service';
import {AccountResponse} from '@core/models/account-response.model';
import {AuthService} from '@core/services/auth.service';
import {SelectedAccounts} from '../transfer-funds-view/transfer-funds-view.component';

@Component({
  selector: 'app-transfer-funds-page',
  templateUrl: './transfer-funds-page.component.html',
  styleUrls: ['./transfer-funds-page.component.sass']
})
export class TransferFundsPageComponent implements OnInit {

  selectedAccounts?: SelectedAccounts;
  accounts!: AccountResponse[];

  constructor(private routeService: DashboardRoutingService,
              private accountService: AccountService,
              private authService: AuthService) { }

  ngOnInit() {
    this.loadAccounts();
  }

  goBack() {
    this.routeService.back();
  }

  loadAccounts() {
    this.authService.currentUser.subscribe(
      user => {
        if (user) {
          this.accountService.getAccounts(user?.memberId).subscribe(
            accounts => {
              if (accounts) {
                this.accounts = accounts.content;
              }
            }
          );
        }
      }
    );
  }

  onSelectAccounts(accounts: SelectedAccounts) {
    console.log(accounts);
    this.selectedAccounts = accounts;
  }

}
