import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProductCategories } from '../product-categories.enum';
import { ApiProperty } from '@nestjs/swagger';

export class GetProductsFilterDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  search?: string;

  @IsOptional()
  @IsEnum(ProductCategories)
  @ApiProperty({
    enum: ['HORROR', 'LITERATURE', 'ADVENTUROUS']
  })
  category?: ProductCategories;
}
