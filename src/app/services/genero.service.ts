import { IListaGenero } from './../models/IGenero.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=aed33fafa23205ca6a6f41eda4b27193';
  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros():Observable<IListaGenero> {
    const url = `${this.apiURL}genere/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API.',
      duration: 2000,
      color: 'danger',
      position: "middle"
    });
    toast.present();
    return null;
  }
}
