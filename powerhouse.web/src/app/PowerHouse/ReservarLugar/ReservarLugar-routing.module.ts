import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarLugarComponent } from './ReservarLugar.component';

const routes: Routes = [
  {
    path: '',
    component: ReservarLugarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservarLugarRoutingModule {
}
