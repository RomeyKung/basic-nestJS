import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://root:root@localhost:27017/romeNestJs?authSource=admin')],
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/romeNestJs',{
    user: 'root',
    pass: 'root',
    dbName: 'romeNestJs',
    authSource: 'admin',
  }), ProductsModule, OrdersModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
