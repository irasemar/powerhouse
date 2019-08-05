import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTrainComponent } from './class-train.component';

describe('ClassTrainComponent', () => {
  let component: ClassTrainComponent;
  let fixture: ComponentFixture<ClassTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
