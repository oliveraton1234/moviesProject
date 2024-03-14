import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataApi } from '../interfaces/pokemon-data';

const APIURL='https://api.pokemontcg.io/v2/';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(
    private http: HttpClient
  ) { }

  getTopAnimes() {
    // return this.http.get('https://api.jikan.moe/v4/top/anime');
    return this.http.get<dataApi>(`${APIURL}cards?pageSize=25`);
  }

  getCardById(id: string){
    return this.http.get<dataApi>(`${APIURL}cards/${id}`);
  }

  getCardByName(namePoke: string){
    return this.http.get<dataApi>(`${APIURL}cards?q=name:${namePoke}&pageSize=10`);
  }

  getCardByType(type: string){
    return this.http.get(`${APIURL}cards?q=types:${type}&pageSize=50`);
  }

}
