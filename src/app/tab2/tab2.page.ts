

import { Component } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { dataApi } from '../interfaces/pokemon-data';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  misPokemons: any = [];
  load = false;
  constructor(
    private animeS: AnimeService
  ) {
    this.animeS.getTopAnimes().subscribe((card: dataApi) => {
      this.misPokemons = card.data;
      this.load = true;
      console.log(this.misPokemons);
    });
  }

}
