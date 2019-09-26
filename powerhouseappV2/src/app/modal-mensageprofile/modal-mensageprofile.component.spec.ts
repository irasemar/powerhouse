import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMensageProfileComponent } from './modal-mensageprofile.component';

describe('ModalCancelarReservaComponent', () => {
  let component: ModalMensageProfileComponent;
  let fixture: ComponentFixture<ModalMensageProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMensageProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMensageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
