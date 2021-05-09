import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: './schemas/schema.gql',
      sortSchema: true,
      include: [RecipesModule],
    }),
    RecipesModule,
  ],
})
export class AppModule {}
