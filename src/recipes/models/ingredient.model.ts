import { Field, Int, ObjectType } from '@nestjs/graphql';

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
