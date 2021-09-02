import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardNavComponent} from './dashboard-nav/dashboard-nav.component';
import {SettingsComponent} from './settings/settings.component';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from '@dashboard/dashboard-routing.module';
import {AccountsDashboardComponent} from './accounts-dashboard/accounts-dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import {LogoModule} from '@app/logo/logo.module';
import {AppIconsModule} from '@app/app-icons.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavComponent,
    SettingsComponent,
    AccountsDashboardComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LogoModule,
    AppIconsModule
  ]
})
export class DashboardModule { }
