import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseInterceptors } from '@nestjs/common';

import { MoviesService } from './movies.service';
import { Movie, Serial } from '../graphql';
import { MediaInterceptor } from './interceptors/media.interceptor';

@Resolver()
export class MoviesResolver {
  constructor(private readonly movieService: MoviesService) {}

  @Query()
  @UseInterceptors(MediaInterceptor)
  async movies(
    @Args('page') page: string,
    @Args('resolution') resolution: string,
    @Args('cat') cat: string,
  ): Promise<Movie[]> {
    try {
      const movies = await this.movieService.getMediaData(
        'film',
        page,
        resolution,
        cat,
      );

      return movies.results;
    } catch (e) {
      return e;
    }
  }

  @Query()
  async serials(
    @Args('page') page: string,
    @Args('resolution') resolution: string,
    @Args('cat') cat: string,
  ): Promise<Serial[]> {
    try {
      const movies = await this.movieService.getMediaData(
        'serial',
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
