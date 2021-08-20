import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardNavComponent} from './dashboard-nav/dashboard-nav.component';
import {SettingsComponent} from './settings/settings.component';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from '@dashboard/dashboard-routing.module';
import {AccountsDashboardComponent} from './accounts-dashboard/accounts-dashboard.component';
import { SummaryComponent } from './summary/summary.component';

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
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
