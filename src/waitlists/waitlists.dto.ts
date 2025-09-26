import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { Prisma } from '@db';

export class CreateWaitlistDto implements Prisma.WaitlistCreateInput {
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean | undefined;
}

export class PatchWaitlistDto implements Prisma.WaitlistUpdateInput {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean | undefined;
}
