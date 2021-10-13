import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TransferFundsViewComponent} from './transfer-funds-view.component';

describe('TransferFundsViewComponent', () => {
  let component: TransferFundsViewComponent;
  let fixture: ComponentFixture<TransferFundsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferFundsViewComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFundsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
