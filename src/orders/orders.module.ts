import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema, Order } from './schemas/order.schema';
import { ProductsModule } from '../products/products.module';

@Module({
  //register OrderSchema และ Order ใน MongooseModule
  imports:[MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}]), ProductsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
