import { Body, Controller, Get, Param, Patch, Post, UseGuards, Request, Query } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth2/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getProducts(@Request() req, @Query() filterProductsDto: GetProductsFilterDto) {
    console.log(req.user)
    return this.productService.getProducts(filterProductsDto);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Patch(':id')
  updateProduct(@Body() updateProduct: any, @Param('id') id: string) {
    return this.productService.updateProduct(id, updateProduct);
  }
}
