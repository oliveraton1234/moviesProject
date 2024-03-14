import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeDetailPageRoutingModule } from './poke-detail-routing.module';

import { PokeDetailPage } from './poke-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeDetailPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PokeDetailPage]
})
export class PokeDetailPageModule {}
