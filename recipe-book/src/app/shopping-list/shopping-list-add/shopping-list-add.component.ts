import { NgForm } from '@angular/forms/src/directives';
import { Component, Input, OnChanges} from '@angular/core';
import { Ingredient } from '../../../model/Ingredient';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd = true;
  @Input() item : Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes){
    if (changes.item.currentValue === null){
      this.isAdd = true;
      this.item = {name:null, amount:null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(value){
    const newIngredient = { name : value.name, amount : value.amount} ;
    if(!this.isAdd){
      this.sls.editIngredient(this.item,newIngredient);
    } else {
      this.item = newIngredient;
      this.sls.addIngredient(this.item);
    }    
  }

  onDelete(){
    this.sls.deleteIngredient(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd=true;
    this.item = {name:null, amount:null};
  }
}
