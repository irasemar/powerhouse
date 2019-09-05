import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnioComponent } from './Anio.component';

const routes: Routes = [
  {
    path: '',
    component: AnioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnioRoutingModule {
}
