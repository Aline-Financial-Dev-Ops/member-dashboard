import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardNavComponent} from './dashboard-nav/dashboard-nav.component';
import {DashboardRoutingModule} from '@dashboard/dashboard-routing.module';
import {AccountsDashboardComponent} from './accounts-dashboard/accounts-dashboard.component';
import {SummaryComponent} from './summary/summary.component';
import {LogoModule} from '@app/logo/logo.module';
import {AppIconsModule} from '@app/app-icons.module';
import {TabNavComponent} from './dashboard-nav/tab-nav/tab-nav.component';
import {NavTabComponent} from '@dashboard/dashboard-nav/tab-nav/nav-tab.component';
import {UserAvatarComponent} from './user-avatar/user-avatar.component';
import {DrawerComponent} from './dashboard-nav/drawer/drawer.component';
import {NgbPaginationModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {AccountViewComponent} from './account-view/account-view.component';
import {AccountLabelPipe} from './pipes/account-label.pipe';
import {AccountPageComponent} from './account-page/account-page.component';
import {CommonModule} from '@angular/common';
import {TransactionsViewComponent} from './transactions-view/transactions-view.component';
import {TransactionAmountPipe} from './pipes/transaction-amount.pipe';
import {TransactionStatusPipe} from './pipes/transaction-status.pipe';
import {TransactionDescriptionPipe} from './pipes/transaction-description.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavComponent,
    AccountsDashboardComponent,
    SummaryComponent,
    TabNavComponent,
    NavTabComponent,
    UserAvatarComponent,
    DrawerComponent,
    AccountViewComponent,
    AccountLabelPipe,
    AccountPageComponent,
    TransactionsViewComponent,
    TransactionAmountPipe,
    TransactionStatusPipe,
    TransactionDescriptionPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LogoModule,
    AppIconsModule,
    NgbTooltipModule,
    NgbPaginationModule
  ]
})
export class DashboardModule {}
