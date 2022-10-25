import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private userService: UsersService,
  ) {}

  async getOrders() {
    const orders = await this.orderModel
      .find()
      // .populate({ path: 'User', strictPopulate: false });
      .populate('user')
      .populate('product');
    return orders;
  }

  async createOrder() {
    const order = await this.orderModel.create({
      product: '6344eebc5863ff6b8cce0478',
      user: '634686c1c569cb9049af1676',
    });

    console.log(order);
  }
}
