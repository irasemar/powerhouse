import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorMusicaComponent } from './InstructorMusica.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorMusicaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorMusicaRoutingModule {
}
