import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from '@dashboard/settings/settings.component';
import {AccountsDashboardComponent} from '@dashboard/accounts-dashboard/accounts-dashboard.component';
import {DashboardComponent} from '@dashboard/dashboard.component';
import {SummaryComponent} from '@dashboard/summary/summary.component';
import {AuthGuard} from '@core/guards/auth.guard';
import {NotFoundComponent} from '@app/not-found/not-found.component';
import {AccountPageComponent} from '@dashboard/account-page/account-page.component';
import {DashboardRoutingService} from '@dashboard/dashboard-routing.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'summary'
      },
      {
        path: 'summary',
        component: SummaryComponent,
        data: {
          animationState: 'summaryPage'
        }
      },
      {
        path: 'accounts',
        component: AccountsDashboardComponent,
        data: {
          animationState: 'accountsPage'
        }
      },
      {
        path: 'accounts/:id',
        component: AccountPageComponent,
        data: {
          animationState: 'viewAccount'
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
  ],
  providers: [
    DashboardRoutingService
  ]
})
export class DashboardRoutingModule { }
