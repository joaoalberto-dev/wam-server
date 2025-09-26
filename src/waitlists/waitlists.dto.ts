import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateWaitlistDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean | undefined;
}

export class PatchWaitlistDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean | undefined;
}
