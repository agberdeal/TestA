import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Pigma Burger", "Rico Rico!","http://www.alertamenu.com/upload/establecimientos/1555/hamburgueseria-goiko-grill-madrid-donde-comer-en-madrid-hamburguesa-pigma-bacon-cheddar-salsa-maho-goiko-y-huevo-frito.jpg",[]),
    new Recipe("Kevin Bacon Burger", "Cremita!","http://www.highgrossery.com/wp-content/uploads/2014/12/goikogrill.jpg",[]),
    new Recipe("La Yankee", "Costillas de cerdo deshuesadas!","http://valenciagastronomica.com/wp-content/uploads/2017/01/GOIKO_GRILL_HAMBURGUESAS_YANKEE_1.jpg",[]),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(r : Recipe){
    this.recipeSelected.emit(r);
  }
}
