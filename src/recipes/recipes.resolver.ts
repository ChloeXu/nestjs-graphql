import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RecipesService } from './services/recipes/recipes.service';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './models/recipe.model';
import { Logger } from '@nestjs/common';
import { Ingredient } from './models/ingredient.model';
import { IngredientsService } from './services/ingredients/ingredients.service';

@Resolver(() => Recipe)
export class RecipesResolver {
  private readonly logger = new Logger(RecipesResolver.name);
  constructor(
    private readonly recipesService: RecipesService,
    private ingredientsService: IngredientsService,
  ) {}

  @Mutation(() => Recipe)
  createRecipe(
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
  ) {
    this.logger.log('Received @Mutation for createRecipe');
    return this.recipesService.create(createRecipeInput);
  }

  @Query(() => [Recipe], { name: 'recipes' })
  findAll() {
    this.logger.log('Received @Query for recipes');
    return this.recipesService.findAll();
  }

  @Query(() => Recipe, { name: 'recipe' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    this.logger.log('Received @Query for recipe');
    return this.recipesService.findOne(id);
  }

  @Mutation(() => Recipe)
  updateRecipe(
    @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput,
  ) {
    this.logger.log('Received @Mutation for updateRecipeInput');
    return this.recipesService.update(updateRecipeInput.id, updateRecipeInput);
  }

  @Mutation(() => Recipe)
  removeRecipe(@Args('id', { type: () => Int }) id: number) {
    this.logger.log('Received @Mutation for removeRecipe');
    return this.recipesService.remove(id);
  }

  @ResolveField('ingredients', () => [Ingredient])
  async getIngredients(@Parent() recipe: Recipe) {
    this.logger.log('Received @ResolveField for ingredients');
    const { id } = recipe;
    return this.ingredientsService.findAll(id);
  }
}
