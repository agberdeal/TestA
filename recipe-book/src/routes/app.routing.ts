import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent} from '../app/recipes/recipes.component';
import { ShoppingListComponent } from '../app/shopping-list/shopping-list.component';
import { RECIPES_ROUTES } from './app.routing.recipes';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent , children: RECIPES_ROUTES},
    { path: 'shopping-list', component: ShoppingListComponent }
];

export const RoutingModule = RouterModule.forRoot(APP_ROUTES);