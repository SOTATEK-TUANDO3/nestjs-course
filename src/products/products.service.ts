import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    console.log(product);
    return product;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createProduct = await this.productModel.create(createProductDto);
    return createProduct;
  }

  async updateProduct(id: string, updateProduct: Product): Promise<Product> {
    const product = await this.productModel.findByIdAndUpdate(
      id,
      updateProduct,
    );
    return product;
  }

  async deleteProduct(id: string): Promise<any> {
    return await this.productModel.findByIdAndRemove(id);
  }

  /* run con job every 10s */

  // @Cron(CronExpression.EVERY_10_SECONDS)
  // handleCron() {
  //   console.log('Called every 10s');
  // }
}
