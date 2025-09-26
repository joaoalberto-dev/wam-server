import { Waitlist } from '@db';
import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { CreateWaitlistDto, PatchWaitlistDto } from './waitlists.dto';

@Injectable()
export class WaitlistsService {
  constructor(private db: DBService) {}

  create(data: CreateWaitlistDto): Promise<Waitlist> {
    return this.db.waitlist.create({ data });
  }

  findAll() {
    return this.db.waitlist.findMany();
  }

  findOne(id: number) {
    return this.db.waitlist.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: PatchWaitlistDto) {
    return this.db.waitlist.update({
      data,
      where: { id },
    });
  }

  remove(id: number) {
    return this.db.waitlist.delete({
      where: { id },
    });
  }
}
