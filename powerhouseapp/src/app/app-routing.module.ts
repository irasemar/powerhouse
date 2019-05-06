import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UpcomingComponent} from './upcoming/upcoming.component';
import {HistoryComponent} from './history/history.component';
import {AwardsComponent} from './awards/awards.component';

const routes: Routes = [
  { path: '', redirectTo: '/slider',pathMatch: 'full'},
  { path: 'slider',      component: SliderComponent },
  { path: 'registro',      component: RegisterComponent },
  { path: 'perfil',      component: ProfileComponent },
  { path: 'proximas-clases',      component: UpcomingComponent },
  { path: 'historial',      component: HistoryComponent },
  { path: 'awards',      component: AwardsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
