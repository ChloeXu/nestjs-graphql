import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from '../../dto/create-recipe.input';
import { UpdateRecipeInput } from '../../dto/update-recipe.input';
import { Recipe } from '../../models/recipe.model';

@Injectable()
export class RecipesService {
  ids: number[] = [];
  recipes: Recipe[] = [];

  create(createRecipeInput: CreateRecipeInput) {
    if (this.ids.includes(createRecipeInput.id)) {
      throw Error('Recipe id already exists');
    }
    const recipe: Recipe = { ...createRecipeInput };
    this.ids.push(recipe.id);
    this.recipes.push(recipe);
    return recipe;
  }

  findAll() {
    return this.recipes;
  }

  findOne(id: number) {
    for (let index = 0; index < this.recipes.length; index += 1) {
      const r = this.recipes[index];
      if (r.id === id) {
        return r;
      }
    }
    return null;
  }

  update(id: number, updateRecipeInput: UpdateRecipeInput) {
    for (let index = 0; index < this.recipes.length; index += 1) {
      const r = this.recipes[index];
      if (r.id === id) {
        const updated = { ...r, ...updateRecipeInput };
        this.recipes[index] = updated;
        return updated;
      }
    }
    return null;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
