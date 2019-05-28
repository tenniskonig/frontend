import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyHistoryComponent } from './penalty-history.component';

describe('PenaltyHistoryComponent', () => {
  let component: PenaltyHistoryComponent;
  let fixture: ComponentFixture<PenaltyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
