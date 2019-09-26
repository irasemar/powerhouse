import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMensageComponent } from './modal-mensage.component';

describe('ModalMensageComponent', () => {
  let component: ModalMensageComponent;
  let fixture: ComponentFixture<ModalMensageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMensageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMensageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
