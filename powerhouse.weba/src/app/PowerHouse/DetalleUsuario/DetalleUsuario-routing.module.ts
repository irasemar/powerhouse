import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleUsuarioComponent } from './DetalleUsuario.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleUsuarioRoutingModule {
}
