import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IFilmeAPI } from '../models/IFilmeAPI.models';

@Component({
  selector: 'app-dados-filmes',
  templateUrl: './dados-filmes.page.html',
  styleUrls: ['./dados-filmes.page.scss'],
})
export class DadosFilmesPage implements OnInit {

  filme: IFilmeAPI;

  generos: string[];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    this.generos = this.dadosService.pegarDados('generos');
    console.log('Filme Enviado', this.filme);
  }

}
