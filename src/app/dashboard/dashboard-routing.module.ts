import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from '@dashboard/settings/settings.component';
import {AccountsDashboardComponent} from '@dashboard/accounts-dashboard/accounts-dashboard.component';
import {DashboardComponent} from '@dashboard/dashboard.component';
import {SummaryComponent} from '@dashboard/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SummaryComponent
      },
      {
        path: 'accounts',
        component: AccountsDashboardComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
