import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class UserSignupDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}

export class UserSigninDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
