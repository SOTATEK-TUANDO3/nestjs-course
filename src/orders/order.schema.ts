import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Product } from 'src/products/product.schema';
import { User } from 'src/users/user.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product' })
  product: Product;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
