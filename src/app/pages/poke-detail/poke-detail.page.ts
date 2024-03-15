import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonData, dataApi } from 'src/app/interfaces/pokemon-data';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.page.html',
  styleUrls: ['./poke-detail.page.scss'],
})
export class PokeDetailPage implements OnInit {


  cardPoke: any = {};
  relacionadas: PokemonData[] = [];
  load = false;

  constructor(
    private activedRoute: ActivatedRoute,
    private animeS: AnimeService,
  ) {
    this.activedRoute.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      this.animeS.getCardById(id).subscribe((card: any) => {
        console.log(card.data);
        this.cardPoke = card.data;
        this.getCardByName(this.cardPoke.name);
        this.load = true;
      });
    });
  }


  ngOnInit() {
  }

  getCardByName(name: string){
    this.animeS.getCardByName(name).subscribe((card: dataApi) => {
      console.log(card.data);
      this.relacionadas = card.data;
    });
  }




}
