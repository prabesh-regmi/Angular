import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyNotifyHistoryComponent } from './loyalty-notify-history.component';

describe('LoyaltyNotifyHistoryComponent', () => {
  let component: LoyaltyNotifyHistoryComponent;
  let fixture: ComponentFixture<LoyaltyNotifyHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyNotifyHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyNotifyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
