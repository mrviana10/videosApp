import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosFilmesPageRoutingModule } from './dados-filmes-routing.module';

import { DadosFilmesPage } from './dados-filmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosFilmesPageRoutingModule
  ],
  declarations: [DadosFilmesPage]
})
export class DadosFilmesPageModule {}
