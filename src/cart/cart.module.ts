import { Module, forwardRef } from '@nestjs/common';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { Cart } from 'src/database/entities/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]), OrderModule],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
