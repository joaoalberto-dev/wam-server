import { User } from '@db';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto implements User {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name: string | null;

  @IsStrongPassword()
  password: string;
}
