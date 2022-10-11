import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  img: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  des: string;
  @IsNotEmpty()
  price: Number;
  @IsNotEmpty()
  author: string;
}
