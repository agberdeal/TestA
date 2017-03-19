import { Ingredient } from '../model/ingredient';

export class ShoppingListService {

  private items : Ingredient[] = [];
  
  constructor() { }

  getItems(){
    return this.items;
  }

  addIngredients(items: Ingredient[]){
    Array.prototype.push.apply(this.items,items);
  }

  addIngredient(item: Ingredient){
    this.items.push(item);
  }

  editIngredient(oldI: Ingredient, newI: Ingredient){
    this.items[this.items.indexOf(oldI)]=newI;
  }

  deleteIngredient(delI: Ingredient){
    this.items.splice(this.items.indexOf(delI),1);
  }
}
