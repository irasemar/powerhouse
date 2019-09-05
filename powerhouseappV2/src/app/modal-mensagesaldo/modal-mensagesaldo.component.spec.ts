import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMensageSaldoComponent } from './modal-mensagesaldo.component';

describe('ModalCancelarReservaComponent', () => {
  let component: ModalMensageSaldoComponent;
  let fixture: ComponentFixture<ModalMensageSaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMensageSaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMensageSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
