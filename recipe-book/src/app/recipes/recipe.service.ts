import { Injectable } from '@angular/core';

import { Ingredient } from './ingredient';
import { Recipe } from "./recipe";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe( "Pigma Burger", 
                "Rico Rico!",
                "http://www.alertamenu.com/upload/establecimientos/1555/hamburgueseria-goiko-grill-madrid-donde-comer-en-madrid-hamburguesa-pigma-bacon-cheddar-salsa-maho-goiko-y-huevo-frito.jpg",
                [
                  new Ingredient("Pan",2),
                  new Ingredient("Huevo frito",1),
                  new Ingredient("Bacon",1),
                  new Ingredient("Hamburguesa de carne",1),
                  new Ingredient("Queso",2),
                ]),
    new Recipe( "Kevin Bacon Burger", 
                "Cremita!",
                "http://www.highgrossery.com/wp-content/uploads/2014/12/goikogrill.jpg",
                [
                  new Ingredient("Pan",2),
                  new Ingredient("Queso",2),
                  new Ingredient("Bacon",1),
                  new Ingredient("Cane Picada",1)
                ]),
    new Recipe( "La Yankee", 
                "Aguita pa los pollos!",
                "http://valenciagastronomica.com/wp-content/uploads/2017/01/GOIKO_GRILL_HAMBURGUESAS_YANKEE_1.jpg",
                [
                  new Ingredient("Pan",2),
                  new Ingredient("Lechuga",1),
                  new Ingredient("Cebolla",1),
                  new Ingredient("Queso",2),
                  new Ingredient("Costillas Cerdo deshuesadas",1),
                  new Ingredient("Hamburguesa ternera",1)
                ]),
  ];

  constructor() { }

  getRecipes(){
    console.log("hola");
    return this.recipes;    
  }
}
