import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../model/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  selectedItem: Ingredient = null;
  items: Ingredient[] = [];
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item: Ingredient){
    this.selectedItem = item;
  }
}
