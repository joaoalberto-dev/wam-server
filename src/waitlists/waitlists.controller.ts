import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WaitlistsService } from './waitlists.service';
import type { Waitlist } from '@db';

@Controller('waitlists')
export class WaitlistsController {
  constructor(private readonly waitlistsService: WaitlistsService) {}

  @Post()
  create(@Body() createWaitlistDto: Waitlist) {
    return this.waitlistsService.create(createWaitlistDto);
  }

  @Get()
  findAll() {
    return this.waitlistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waitlistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Waitlist>) {
    return this.waitlistsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waitlistsService.remove(+id);
  }
}
