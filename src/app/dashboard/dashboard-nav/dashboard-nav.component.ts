import {Component} from '@angular/core';
import {Tab} from '@dashboard/dashboard-nav/tab-nav/tab-nav.component';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.sass']
})
export class DashboardNavComponent {

  tabs: Tab[]

  constructor() {
    this.tabs = [
      {
        icon: 'chart-bar',
        label: 'Summary',
        route: './'
      },
      {
        icon: 'wallet',
        label: 'Accounts',
        route: './accounts'
      },
      {
        icon: 'tags',
        label: 'Offers',
        route: './offers'
      }
    ];
  }

}
