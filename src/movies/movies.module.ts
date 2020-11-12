import { HttpModule, Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';

@Module({
  imports: [HttpModule],
  providers: [MoviesService, MoviesResolver],
  controllers: [],
})
export class MoviesModule {}
