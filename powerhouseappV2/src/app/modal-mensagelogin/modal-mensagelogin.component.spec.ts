import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensageLoginComponent } from './modal-mensagelogin.component';

describe('ModalCancelarReservaComponent', () => {
  let component: MensageLoginComponent;
  let fixture: ComponentFixture<MensageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
