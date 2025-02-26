import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order,OrderDocument } from './schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from '../products/products.service'

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private productsService: ProductsService
 ) {}
  async create(createOrderDto: CreateOrderDto) : Promise<Order> {
    const productResult = await this.productsService.findOne(createOrderDto.productId);
    if(!productResult){
      throw new NotFoundException(`Product with id ${createOrderDto.productId} not found`);
    }
    const result = new this.orderModel(createOrderDto);
    return result.save();
  }

  async findOne(id: string): Promise<Order> {
    const result = await this.orderModel.findById(id).populate('productId').exec();
    return result;
  }


}
