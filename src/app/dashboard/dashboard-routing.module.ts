import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from '@dashboard/settings/settings.component';
import {AccountsDashboardComponent} from '@dashboard/accounts-dashboard/accounts-dashboard.component';
import {DashboardComponent} from '@dashboard/dashboard.component';
import {SummaryComponent} from '@dashboard/summary/summary.component';
import {AuthGuard} from '@core/guards/auth.guard';
import {NotFoundComponent} from '@app/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'summary',
        component: SummaryComponent,
        data: {
          title: 'Summary'
        }
      },
      {
        path: 'accounts',
        component: AccountsDashboardComponent,
        data: {
          title: 'Accounts'
        }
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        component: NotFoundComponent
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
