import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes/recipes.service';

@Injectable()
export class IngredientsService {
  constructor(private recipesService: RecipesService) {}

  findAll(recipeId: number) {
    const recipe = this.recipesService.recipes.find((r) => r.id === recipeId);
    if (recipe) {
      return recipe.ingredients;
    }
    return [];
  }
}
