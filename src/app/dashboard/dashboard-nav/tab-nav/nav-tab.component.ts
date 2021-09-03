import {Component, Input} from '@angular/core';
import {Tab} from '@dashboard/dashboard-nav/tab-nav/tab-nav.component';

@Component({
  selector: 'app-nav-tab',
  template: `
    <button [routerLink]="tab.route" class="btn text-light p-3 d-flex flex-column justify-content-center align-items-center w-100">
      <fa-icon [icon]="tab.icon" class="fs-3"></fa-icon>
      <span class="fw-light d-inline-block mt-1" style="font-size: small">{{tab.label}}</span>
    </button>
  `
})
export class NavTabComponent {
  @Input()
  tab!: Tab;
}
