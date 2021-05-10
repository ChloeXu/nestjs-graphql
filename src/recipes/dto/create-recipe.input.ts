import { InputType, Int, Field } from '@nestjs/graphql';
import { Ingredient } from '../models/ingredient.model';

@InputType()
export class CreateRecipeInput {
  @Field(() => Int, { description: 'Recipe ID' })
  id: number;

  @Field({ description: 'Recipe Name', nullable: false })
  name: string;

  @Field({ description: 'Cuisine', nullable: false })
  cuisine: string;

  @Field(() => [Ingredient], { description: 'Ingredients', nullable: 'items' })
  ingredients: Ingredient[];
}
