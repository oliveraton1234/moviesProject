import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { PokemonData } from 'src/app/interfaces/pokemon-data';


@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss'],
})
export class CardAnimeComponent  implements OnInit {

  @Input() card: any = {};
  constructor(
    private ActionSheetController: ActionSheetController,
    private _favoritService: FavoritosService,
    private router: Router,
  ) { }

  ngOnInit() {}

  async openActions(card: PokemonData){

    const encontrado = this._favoritService.CheckInFavoritos(card);
    console.log(encontrado);

    const actionSheet = await this.ActionSheetController.create({
      header: this.card.name,
      buttons: [
        {
          text: 'Ver detalles',
          icon: 'eye-outline',
          handler: () => {
            this.router.navigateByUrl(`/tabs/details/${this.card.id}`);
          }
        },
        {
          text: 'Compartir',
          icon: 'share-outline',
           handler: () => {
            Share.share({
              title: this.card.name,
              text: 'Te comparto mi carta favorita',
              url: this.card.url,

            });
          }
        },
        {
          text: encontrado ? 'Eliminar de favoritos' :  'Agregar a avoritos',
          icon: encontrado ? 'trash-outline' : 'star-outline',
          handler: () => {
            this._favoritService.addFavorito(card);
          }
        },
        {
          text: 'cancelar',
          icon: 'close-outline',
          role: 'cancel'
        },
      ]
    })
    await actionSheet.present();
  }


  }
