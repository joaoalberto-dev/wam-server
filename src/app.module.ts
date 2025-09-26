import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaitlistsModule } from './waitlists/waitlists.module';
import { SignupsModule } from './signups/signups.module';
import { DBService } from './db/db.service';

@Module({
  imports: [ConfigModule.forRoot(), WaitlistsModule, SignupsModule],
  controllers: [AppController],
  providers: [AppService, DBService],
})
export class AppModule {}
