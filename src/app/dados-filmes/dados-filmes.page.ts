import { IFilme } from './../models/IFilme.models';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filmes',
  templateUrl: './dados-filmes.page.html',
  styleUrls: ['./dados-filmes.page.scss'],
})
export class DadosFilmesPage implements OnInit {

  filme: IFilme;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    console.log('Filme Enviado', this.filme);
  }

}
