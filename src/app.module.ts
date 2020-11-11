import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';

const prod = process.env.NODE_ENV === 'production';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MoviesModule,
    // GraphQLModule.forRoot({
    //   context: ({ req }) => ({ req }),
    //   typePaths: ['./**/*.graphql'],
    //   definitions: {
    //     path: join(process.cwd(), 'src/graphql.ts'),
    //   },
    //   introspection: true,
    //   playground: prod ? false : true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
