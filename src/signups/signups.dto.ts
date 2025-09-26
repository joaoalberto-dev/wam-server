import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { Signup } from '@db';

export class CreateSignupDto implements Signup {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name: string | null;

  @IsNumber()
  waitlistId: number;
}
