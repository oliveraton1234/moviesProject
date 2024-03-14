import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardAnimeComponent } from './card-anime/card-anime.component';



@NgModule({
  declarations: [
    CardAnimeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CardAnimeComponent
  ]
})
export class ComponentsModule { }
