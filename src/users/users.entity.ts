import { Exclude } from 'class-transformer';
import { User } from '@db';

export class UserEntity implements User {
  id: number;
  name: string | null;
  email: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
