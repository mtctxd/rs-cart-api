import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { CartItem } from './cart-item.entity';

export enum CartItemStatus {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
}

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  created_at: Date;

  @Column({
    type: 'date',
    nullable: false,
  })
  updated_at: Date;

  @OneToMany(
    () => CartItem,
    item => item.cart,
  )
  cart_items: CartItem[];
}
