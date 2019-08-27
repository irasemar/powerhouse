import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelarReservaComponent } from './modal-cancelarreserva.component';

describe('ModalCancelarReservaComponent', () => {
  let component: ModalCancelarReservaComponent;
  let fixture: ComponentFixture<ModalCancelarReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCancelarReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCancelarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
