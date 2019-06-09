import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMusicComponent } from './team-music.component';

describe('TeamMusicComponent', () => {
  let component: TeamMusicComponent;
  let fixture: ComponentFixture<TeamMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
