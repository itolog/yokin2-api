import { Module, HttpModule } from '@nestjs/common';
import { TvController } from './tv.controller';

@Module({
  imports: [HttpModule],
  controllers: [TvController],
})
export class TvModule {}
