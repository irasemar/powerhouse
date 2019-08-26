import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemanaComponent } from './Semana.component';

const routes: Routes = [
  {
    path: '',
    component: SemanaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemanaRoutingModule {
}
