import { Injectable } from '@angular/core';
import { PokemonData } from '../interfaces/pokemon-data';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  misFavoritos: PokemonData[] = [];
  constructor() { }

  addFavorito(card: PokemonData){
    this.misFavoritos.unshift(card);
    localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
  }

}
