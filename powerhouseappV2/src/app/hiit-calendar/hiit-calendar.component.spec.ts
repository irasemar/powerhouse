import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiitCalendarComponent } from './hiit-calendar.component';

describe('HiitCalendarComponent', () => {
  let component: HiitCalendarComponent;
  let fixture: ComponentFixture<HiitCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiitCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiitCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
