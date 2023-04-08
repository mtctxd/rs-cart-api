import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CartItem } from './cart-item.entity';

export enum CartStatus {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
}

@Entity({ name: 'carts' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'date', nullable: false })
  user_id: string;

  @Column({ type: 'timestamp' })
  created_at?: number;

  @Column({ type: 'timestamp', nullable: false })
  updated_at: number;

  @Column({
    type: 'enum',
    enum: [CartStatus.OPEN, CartStatus.ORDERED],
    nullable: false,
  })
  status: CartStatus;

  @OneToMany(() => CartItem, (cart_item) => cart_item.cart_id)
  @JoinColumn({ name: 'id', referencedColumnName: 'cart_id' })
  items: CartItem[];
}
