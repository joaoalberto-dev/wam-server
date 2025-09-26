import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSignupDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name: string | null;

  @IsNumber()
  waitlistId: number;
}
