import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../recipes/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private idSub!: Subscription;
  constructor(private shoppingListServie: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListServie.getIngredients();
    this.idSub = this.shoppingListServie.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.idSub.unsubscribe();
  }

  onEdit(index: number) {
    this.shoppingListServie.startedEdit.next(index);
  }
}
