import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchentryComponent } from './matchentry.component';

describe('MatchentryComponent', () => {
  let component: MatchentryComponent;
  let fixture: ComponentFixture<MatchentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
