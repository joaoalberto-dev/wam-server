import { Injectable } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { DBService } from 'src/db/db.service';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private db: DBService) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    const user = await this.db.user.create({ data });
    return new UserEntity(user);
  }

  async findOne(email: string): Promise<UserEntity | null> {
    return this.db.user.findFirst({ where: { email } });
  }
}
