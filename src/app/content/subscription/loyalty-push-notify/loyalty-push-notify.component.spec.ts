import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyPushNotifyComponent } from './loyalty-push-notify.component';

describe('LoyaltyPushNotifyComponent', () => {
  let component: LoyaltyPushNotifyComponent;
  let fixture: ComponentFixture<LoyaltyPushNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyPushNotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyPushNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
