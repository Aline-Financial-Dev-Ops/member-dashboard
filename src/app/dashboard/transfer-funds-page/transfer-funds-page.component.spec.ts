import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TransferFundsPageComponent} from './transfer-funds-page.component';

describe('TransferFundsPageComponent', () => {
  let component: TransferFundsPageComponent;
  let fixture: ComponentFixture<TransferFundsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferFundsPageComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFundsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
