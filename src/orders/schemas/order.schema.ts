import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document,Types } from 'mongoose';
//OrderDocument คือ interface ที่เราจะใช้ในการระบุว่า Order นี้เป็น Document ของ Mongoose และนำไปใช้ในการเขียน Service
export type OrderDocument = Order & Document;

@Schema()
export class Order {
    //type:Types.ObjectId คือการบอกว่าเป็น ObjectId ของ Product มาจาก mongoose 
  @Prop({type:Types.ObjectId, ref: 'Product', required: true}) 
  productId: Types.ObjectId;

  @Prop({required: true})
  quantity: number;

}
//สร้าง Schema ของ Order จาก Class Order และนำไป register ใน MongooseModule ใน orders.module.ts
export const OrderSchema = SchemaFactory.createForClass(Order);
