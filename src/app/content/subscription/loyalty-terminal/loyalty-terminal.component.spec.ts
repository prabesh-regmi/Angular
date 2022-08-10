import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyTerminalComponent } from './loyalty-terminal.component';

describe('LoyaltyTerminalComponent', () => {
  let component: LoyaltyTerminalComponent;
  let fixture: ComponentFixture<LoyaltyTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
