import { Controller, Post, Body } from '@nestjs/common';
import { SignupsService } from './signups.service';
import { CreateSignupDto } from './signups.dto';

@Controller('signups')
export class SignupsController {
  constructor(private readonly signupsService: SignupsService) {}

  @Post()
  create(@Body() createSignupDto: CreateSignupDto) {
    return this.signupsService.create(createSignupDto);
  }
}
