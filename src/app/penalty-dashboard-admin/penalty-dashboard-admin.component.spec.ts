import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyDashboardAdminComponent } from './penalty-dashboard-admin.component';

describe('PenaltyDashboardAdminComponent', () => {
  let component: PenaltyDashboardAdminComponent;
  let fixture: ComponentFixture<PenaltyDashboardAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyDashboardAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyDashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
