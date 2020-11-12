import { HttpService, Injectable } from '@nestjs/common';
import * as queryString from 'query-string';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
  constructor(private readonly http: HttpService) {}

  getMediaData(type = 'film', page = '1', resolution = '', cat = '') {
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
}
