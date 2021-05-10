import { Module } from '@nestjs/common';
import { RecipesService } from './services/recipes/recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { IngredientsService } from './services/ingredients/ingredients.service';

@Module({
  providers: [RecipesResolver, RecipesService, IngredientsService],
})
export class RecipesModule {}
