import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import exp from 'constants';
import {Document} from 'mongoose';
export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({required: true})
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
