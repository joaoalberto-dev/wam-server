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
import { CreateWaitlistDto, PatchWaitlistDto } from './waitlists.dto';
import { WaitlistEntity } from './waitlists.entity';

@Controller('waitlists')
export class WaitlistsController {
  constructor(private readonly waitlistsService: WaitlistsService) {}

  @Post()
  create(@Body() createWaitlistDto: CreateWaitlistDto) {
    return this.waitlistsService.create(createWaitlistDto);
  }

  @Get()
  async findAll() {
    const list = await this.waitlistsService.findAll();
    return list.map((waitlist) => new WaitlistEntity(waitlist));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waitlistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: PatchWaitlistDto) {
    return this.waitlistsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waitlistsService.remove(+id);
  }
}
