import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SliderComponent} from './slider/slider.component'

const routes: Routes = [
  { path: '', redirectTo: '/slider',pathMatch: 'full'},
  { path: 'slider',      component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
