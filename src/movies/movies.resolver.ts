import { Args, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movies } from '../graphql';

@Resolver()
export class MoviesResolver {
  constructor(private readonly movieService: MoviesService) {}

  @Query()
  async movies(
    @Args('type') type: string,
    @Args('page') page: string,
    @Args('resolution') resolution: string,
    @Args('cat') cat: string,
  ): Promise<Movies[]> {
    try {
      const movies = await this.movieService.getMediaData(
        type,
        page,
        resolution,
        cat,
      );

      return movies.results;
    } catch (e) {
      return e;
    }
  }
}
