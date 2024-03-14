
export interface dataApi{
  data: PokemonData[],
  count: number,
  page: number,
  pageSize: number,
  totalCount: number
}

export interface PokemonData {
    id:                     string;
    name:                   string;
    supertype:              string;
    subtypes:               string[];
    level:                  string;
    hp:                     string;
    types:                  string[];
    evolvesFrom:            string;
    abilities:              Ability[];
    attacks:                Attack[];
    weaknesses:             Resistance[];
    resistances:            Resistance[];
    retreatCost:            string[];
    convertedRetreatCost:   number;
    set:                    Set;
    number:                 string;
    artist:                 string;
    rarity:                 string;
    flavorText:             string;
    nationalPokedexNumbers: number[];
    legalities:             Legalities;
    images?:                 InterfaceImages;
    tcgplayer:              Tcgplayer;
    cardmarket:             Cardmarket;
  }

  export interface Ability {
    name: string;
    text: string;
    type: string;
  }

  export interface Attack {
    name:                string;
    cost:                string[];
    convertedEnergyCost: number;
    damage:              string;
    text:                string;
  }

  export interface Cardmarket {
    url:       string;
    updatedAt: string;
    prices:    { [key: string]: number };
  }

  export interface InterfaceImages {
    small: string;
    large: string;
  }

  export interface Legalities {
    unlimited: string;
  }

  export interface Resistance {
    type:  string;
    value: string;
  }

  export interface Set {
    id:           string;
    name:         string;
    series:       string;
    printedTotal: number;
    total:        number;
    legalities:   Legalities;
    ptcgoCode:    string;
    releaseDate:  string;
    updatedAt:    string;
    images:       SetImages;
  }

  export interface SetImages {
    symbol: string;
    logo:   string;
  }

  export interface Tcgplayer {
    url:       string;
    updatedAt: string;
    prices?:    Prices;
  }

  export interface Prices {
    holofoil:        Holofoil;
    reverseHolofoil: Holofoil;
    normal:         Holofoil;
    unlimitedHolofoil: Holofoil;
    // 1stEditionHolofoil: Holofoil;
  }

  export interface Holofoil {
    low:       number;
    mid:       number;
    high:      number;
    market:    number;
    directLow: null;
}


