import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss'],
})
export class CardAnimeComponent  implements OnInit {

  @Input() card: any = {};
  constructor(
    private ActionSheetController: ActionSheetController,
    private router: Router,
  ) { }

  ngOnInit() {}

  async openActions(card: any){
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
        },
        {
          text: 'Favorites',
          icon: 'star-outline',
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
