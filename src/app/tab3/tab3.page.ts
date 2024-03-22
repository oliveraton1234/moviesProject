import { Component } from '@angular/core';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private _favS: FavoritosService,
  ) {}

  get favoritos(){
    return this._favS.favoritos;
  }
}
