import { Injectable } from '@angular/core';
import { PokemonData } from '../interfaces/pokemon-data';
import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  misFavoritos: PokemonData[] = [];
  constructor(
    private alert: AlertsService,
  ) {
    this.CargarFavoritos();
   }

  CargarFavoritos(){
    this.misFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]') || [];
  }

  CheckInFavoritos(card: PokemonData){
    const encontrados = !!this.misFavoritos.find(pokemon => pokemon.id === card.id);
    return encontrados;
  }

  addFavorito(card: PokemonData){
    const encontrado = this.misFavoritos.find(pokemon => pokemon.id === card.id);
    console.log(encontrado);
    if(encontrado){
      const  filtrados = this.misFavoritos.filter(c => c.id !== encontrado.id);
      console.log(filtrados);
      this.alert.principal('Eliminado de favoritos', 'Success', 'danger');
      localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
      return;
    }
    this.misFavoritos.unshift(card);
    this.alert.principal('Agregado a favoritos', 'Success', 'success');
    localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
  }

  get favoritos(){
    return [...this.misFavoritos];
  }
}
