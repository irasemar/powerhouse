import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesAnterioresComponent } from './clasesanteriores.component';

const routes: Routes = [
  {
    path: '',
    component: ClasesAnterioresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesAnterioresRoutingModule {
}
