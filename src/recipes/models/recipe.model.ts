import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Ingredient } from './ingredient.model';

@ObjectType()
export class Recipe {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  cuisine: string;

  @Field(() => [Ingredient], { nullable: 'items' })
  ingredients: Ingredient[];
}
