import { Injectable } from '@angular/core';
import { PokemonData } from '../interfaces/pokemon-data';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  misFavoritos: PokemonData[] = [];
  constructor() { }

  addFavorito(card: PokemonData){
    const encontrado = this.misFavoritos.find(pokemon => pokemon.id === card.id);
    console.log(encontrado);
    if(encontrado){
      const  filtrados = this.misFavoritos.filter(c => c.id !== encontrado.id);
      console.log(filtrados);
      localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
      return;
    }
    this.misFavoritos.unshift(card);
    localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
  }

}
