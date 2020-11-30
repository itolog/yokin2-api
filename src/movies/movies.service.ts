import { HttpService, Injectable } from '@nestjs/common';
import * as queryString from 'query-string';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
  constructor(private readonly http: HttpService) {}

  async getMediaData(type = 'film', page = '1', resolution = '', cat = '') {
    const params = {
      token: process.env.BZ_API_TOKEN,
      type,
      page,
      resolution,
      cat,
    };

    const queryParams = queryString.stringify(params);
    return this.http
      .get(`${process.env.BZ_BASE_API_URL}/json?${queryParams}`)
      .pipe(map((res) => res.data))
      .toPromise();
  }

  async search(kp?: string, title?: string) {
    const params = {
      token: process.env.BZ_API_TOKEN,
      kp,
      title,
    };
    const queryParams = queryString.stringify(params);
    return this.http
      .get(`${process.env.BZ_BASE_API_URL}/search?${queryParams}`)
      .pipe(map((res) => res.data))
      .toPromise();
  }

  async getNowPlaying() {
    const movies = this.http
      .get(
        `${process.env.IMDB_URL}/movie/now_playing?api_key=${process.env.IMDB_TOKEN}&page=1`,
      )
      .pipe(map(({ data }) => data.results));
    return movies.toPromise();
  }
}
