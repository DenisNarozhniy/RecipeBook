import { Injectable } from '@angular/core';
import { Ingredient } from '../recipes/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEdit = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addToShoppingList(ingredientss: Ingredient[]) {
    this.ingredients.push(...ingredientss);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(i: number, Ing: Ingredient) {
    this.ingredients[i] = Ing;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(i: number) {
    this.ingredients.splice(i, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  constructor() {}
}
