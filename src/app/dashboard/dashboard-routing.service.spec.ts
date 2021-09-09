import { TestBed } from '@angular/core/testing';

import { DashboardRoutingService } from './dashboard-routing.service';

describe('DashboardRoutingService', () => {
  let service: DashboardRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
