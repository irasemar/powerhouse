import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalonLugarComponent } from './SalonLugar.component';

const routes: Routes = [
  {
    path: '',
    component: SalonLugarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalonLugarRoutingModule {
}
