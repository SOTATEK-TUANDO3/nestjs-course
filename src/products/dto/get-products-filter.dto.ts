import { IsEnum, IsOptional, IsString } from "class-validator";
import { ProductCategories } from "../product-categories.enum";

export class GetProductsFilterDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(ProductCategories)
  category?: ProductCategories;
}