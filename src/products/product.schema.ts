import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {  
  @Prop()
  img: string;

  @Prop()
  name: string;

  @Prop()
  des: string;

  @Prop()
  price: Number;

  @Prop()
  category: string;

  @Prop()
  author: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
