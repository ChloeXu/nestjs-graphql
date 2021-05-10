import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('IngredientInput')
@ObjectType()
export class Ingredient {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  unit: string;

  @Field(() => Int)
  quantity: number;
}
