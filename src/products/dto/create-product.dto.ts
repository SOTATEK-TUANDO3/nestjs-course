import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'link of image of product',
    type: String,
    required: true
  })
  @IsNotEmpty({})
  img: string;

  @ApiProperty({
    type: String
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String
  })
  @IsNotEmpty()
  des: string;

  @ApiProperty({
    type: Number
  })
  @IsNotEmpty()
  price: Number;

  @ApiProperty({
    type: String
  })
  @IsNotEmpty()
  author: string;
}
