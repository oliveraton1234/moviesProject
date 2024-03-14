import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeDetailPage } from './poke-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PokeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeDetailPageRoutingModule {}
