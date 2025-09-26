import { Module } from '@nestjs/common';
import { WaitlistsService } from './waitlists.service';
import { WaitlistsController } from './waitlists.controller';
import { DBModule } from 'src/db/db.module';

@Module({
  imports: [DBModule],
  controllers: [WaitlistsController],
  providers: [WaitlistsService],
})
export class WaitlistsModule {}
