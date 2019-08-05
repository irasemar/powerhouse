import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TallaZapatoComponent } from './TallaZapato.component';

const routes: Routes = [
  {
    path: '',
    component: TallaZapatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TallaZapatoRoutingModule {
}
