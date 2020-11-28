import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { encode } from 'node-base64-image';
import { Movie, Serial } from '../../graphql';

const options = {
  string: true,
};

@Injectable()
export class MediaInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: []) => {
        return data.map(async (item: Movie | Serial) => {
          const img = await encode(item.info.poster, options);
          item.info.poster = img.toString();
          return item;
        });
      }),
    );
  }
}
