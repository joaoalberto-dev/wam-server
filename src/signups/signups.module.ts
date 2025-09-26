import { Module } from '@nestjs/common';
import { DBModule } from 'src/db/db.module';
import { SignupsController } from './signups.controller';
import { SignupsService } from './signups.service';

@Module({
  imports: [DBModule],
  controllers: [SignupsController],
  providers: [SignupsService],
})
export class SignupsModule {}
