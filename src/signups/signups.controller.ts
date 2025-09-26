import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SignupsService } from './signups.service';

@Controller('signups')
export class SignupsController {
  constructor(private readonly signupsService: SignupsService) {}

  @Post()
  create(@Body() createSignupDto: unknown) {
    return this.signupsService.create(createSignupDto);
  }

  @Get()
  findAll() {
    return this.signupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignupDto: unknown) {
    return this.signupsService.update(+id, updateSignupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signupsService.remove(+id);
  }
}
