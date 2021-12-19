import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

  
@Component({
    selector: 'pokemon-app',
    templateUrl: './app/app.component.html',
  })

  export class AppComponent  implements OnInit{ 

    private pokemons : Pokemon[];
    private title: string = "Pokémons"; 


    ngOnInit(){
    this.pokemons = POKEMONS;

    }

    
    selectPokemon( pokemon : Pokemon){
      alert("vous avez selectionner " + pokemon.name);
    }
}