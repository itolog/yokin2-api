import { Controller, Get, HttpService } from '@nestjs/common';
import * as parser from 'iptv-playlist-parser';
import { map } from 'rxjs/operators';

@Controller('tv')
export class TvController {
  constructor(private httpService: HttpService) {}

  @Get()
  async tv() {
    return this.httpService.get(process.env.TV_PLAYLIST).pipe(
      map(({ data }) => {
        return parser.parse(data);
      }),
    );
  }
}
