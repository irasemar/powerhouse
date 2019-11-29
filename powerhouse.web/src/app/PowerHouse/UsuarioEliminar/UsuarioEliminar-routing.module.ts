import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioEliminarComponent } from './UsuarioEliminar.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioEliminarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioEliminarRoutingModule {
}
