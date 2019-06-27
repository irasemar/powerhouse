import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UpcomingComponent} from './upcoming/upcoming.component';
import {HistoryComponent} from './history/history.component';
import {AwardsComponent} from './awards/awards.component';
import {HiitComponent} from './hiit/hiit.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClassComponent } from './class/class.component';
import { CartComponent } from './cart/cart.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/slider',pathMatch: 'full'},
  { path: 'slider',      component: SliderComponent},
  { path: 'registro',      component: RegisterComponent },
  { path: 'perfil',      component: ProfileComponent },
  { path: 'proximas-clases',      component: UpcomingComponent },
  { path: 'historial',      component: HistoryComponent },
  { path: 'awards',      component: AwardsComponent },
  { path: 'hiit',      component: HiitComponent },
  { path: 'calendar',      component: CalendarComponent },
  { path: 'clase',      component: ClassComponent },
  { path: 'cart',      component: CartComponent },
  { path: 'team',      component: InstructorsComponent },
  { path: 'team-detail',      component: TeamDetailComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
