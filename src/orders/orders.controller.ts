import { Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getOrders() {
    return this.ordersService.getOrders();
  }

  @Post()
  async createOrder() {
    this.ordersService.createOrder();
  }
}
