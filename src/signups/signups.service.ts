import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { CreateSignupDto } from './signups.dto';

@Injectable()
export class SignupsService {
  constructor(private db: DBService) {}

  create(data: CreateSignupDto) {
    return this.db.signup.create({ data });
  }
}
