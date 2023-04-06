import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  product_id: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  count: number;

  @ManyToOne(
    () => Cart,
    cart => cart.cart_items,
  )
  cart: Cart;
}
