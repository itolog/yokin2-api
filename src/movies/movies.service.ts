import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
    constructor(
        private readonly http: HttpService
      ) {}


       getMovies(){
          return this.http
          .get(`${process.env.BZ_BASE_API_URL}/json?token=${process.env.BZ_API_TOKEN}&type=film&page=1`)
          .pipe(map(res => res.data))
          .toPromise()
      }
}
