import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosFilmesPage } from './dados-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: DadosFilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosFilmesPageRoutingModule {}
