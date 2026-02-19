import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  page?: number = 1;

  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  limit?: number = 10;
}
