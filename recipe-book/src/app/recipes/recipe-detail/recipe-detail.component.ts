
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from "../../../model/recipe";
import { ShoppingListService } from '../../../services/shopping-list.service';
import { RecipeService } from '../../../services/recipe.service';


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  private recipeIndex : number;
  selectedRecipe : Recipe;

  constructor(private sls : ShoppingListService, 
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.subscription =  this.route.params.subscribe(
      (params: any) => {
          this.recipeIndex = params['id'];
          this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddToShoppingList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
}
