import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../model/recipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  recipeForm : FormGroup;

  private recipeIndex: number;
  private recipe: Recipe;
  private isNew = true;

  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute, 
              private rs: RecipeService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params:any) => {
          if(params.hasOwnProperty('id')){
            this.isNew = false;
            this.recipeIndex = +params['id'];
            this.recipe = this.rs.getRecipe(this.recipeIndex);
          } else {
            this.isNew = true;
            this.recipe=null;
          }
          this.initForm();
      }
      
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients : FormArray = new FormArray([]);

    if(!this.isNew){
        for(let i = 0; i < this.recipe.ingredients.length; i++){
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(this.recipe.ingredients[i].amount, [
                                        Validators.required,
                                        Validators.pattern("\\d+")
                                    ])
            })
          );
        }
        recipeName = this.recipe.name;
        recipeImageUrl = this.recipe.imagePath;
        recipeContent = this.recipe.description;

        
    }

    this.recipeForm = this.formBuilder.group({
          name: [recipeName, Validators.required],
          imagePath: [recipeImageUrl, Validators.required],
          description: [recipeContent, Validators.required],
          ingredients: recipeIngredients
        });

  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;

    if(this.isNew){
      this.rs.addRecipe(newRecipe);
    } else {
      this.rs.editRecipe(this.recipe,newRecipe);
    }

    this.navigateBack();
  }
  onCancel(){
    this.navigateBack();
  }

  onAddItem(name:string, amount: number){
    (<FormArray>this.recipeForm.controls['ingredients']).push(
            new FormGroup({
                name: new FormControl(name, Validators.required),
                amount: new FormControl(amount, [
                                        Validators.required,
                                        Validators.pattern("\\d+")])
            })
    );
  }

  onRemoveItem(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

}
