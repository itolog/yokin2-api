import { HttpModule, Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [HttpModule],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}
