import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '@dashboard/dashboard.component';
import {SettingsComponent} from '@dashboard/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
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
