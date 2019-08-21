import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPagosComponent } from './historypagos.component';

describe('HistoryComponent', () => {
  let component: HistoryPagosComponent;
  let fixture: ComponentFixture<HistoryPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
