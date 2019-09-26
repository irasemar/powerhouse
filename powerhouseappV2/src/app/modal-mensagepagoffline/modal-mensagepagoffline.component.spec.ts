import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagePagoOfflineComponent } from './modal-mensagepagoffline.component';

describe('ModalCancelarReservaComponent', () => {
  let component: MensagePagoOfflineComponent;
  let fixture: ComponentFixture<MensagePagoOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagePagoOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagePagoOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
