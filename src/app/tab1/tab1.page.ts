import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.models';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';

  listaVideos: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos:['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '15/04/2021',
      duracao: '4h 2m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Ficção científica'],
      pagina: '/liga-justica'
    },
    {
      nome: 'Raya e o Último Dragão (2021)',
      lancamento: '04/03/2021',
      duracao: '1h 47m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o2NTWpD6LVf1YyPKTdvcEuHqcJ6.jpg',
      generos: ['Animação', 'Aventura', 'Fantasia', 'Família', 'Ação']
    },
    {
      nome: 'Contra a Terra (2021)',
      lancamento: '30/04/2021',
      duracao: '5m',
      classificacao: 71,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yXhjueyyNNrGinwM9WIxuwNqzbm.jpg',
      generos: ['Família', 'Animação', 'Comédia']
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

    exibirFilme(filme: IFilme) {
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filmes');

    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!!!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos!!!.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
