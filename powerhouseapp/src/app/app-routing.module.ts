import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UpcomingComponent} from './upcoming/upcoming.component';
import {HistoryComponent} from './history/history.component';
import {AwardsComponent} from './awards/awards.component';
import {HiitComponent} from './hiit/hiit.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClassComponent } from './class/class.component';

const routes: Routes = [
  { path: '', redirectTo: '/slider',pathMatch: 'full'},
  { path: 'slider',      component: SliderComponent },
  { path: 'registro',      component: RegisterComponent },
  { path: 'perfil',      component: ProfileComponent },
  { path: 'proximas-clases',      component: UpcomingComponent },
  { path: 'historial',      component: HistoryComponent },
  { path: 'awards',      component: AwardsComponent },
  { path: 'hiit',      component: HiitComponent },
  { path: 'calendar',      component: CalendarComponent },
  { path: 'clase',      component: ClassComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
