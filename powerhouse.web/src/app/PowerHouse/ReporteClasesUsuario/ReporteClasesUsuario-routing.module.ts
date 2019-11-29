import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteClasesUsuarioComponent } from './ReporteClasesUsuario.component';

const routes: Routes = [
  {
    path: '',
    component: ReporteClasesUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteClasesUsuarioRoutingModule {
}
