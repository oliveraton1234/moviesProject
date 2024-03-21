import { Component } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { AnimeService } from '../services/anime.service';
import { PokemonData, dataApi } from '../interfaces/pokemon-data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  misPokemon: PokemonData[] = [];
  constructor(
    private pokeS: AnimeService,
  ) {}

  load = false;

  buscar( event: any){
    console.log(event.detail.value);
    this.pokeS.getCardByName(event.detail.value).subscribe((res: dataApi) => {
      console.log(res.data);
      this.misPokemon = res.data;
      this.load = true;
    })
  }

}
