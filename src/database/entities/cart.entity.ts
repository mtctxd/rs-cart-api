import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CartItem } from './cart-item.entity';

@Entity({ name: 'carts' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date', nullable: false })
  created_at: string;

  @Column({ type: 'date', nullable: false })
  updated_at: string;

  @Column({ type: 'enum', enum: ['OPEN', 'ORDERED'], nullable: false })
  status: 'OPEN' | 'ORDERED';

  @OneToMany(() => CartItem, (cart_item) => cart_item.cart_id)
  @JoinColumn({ name: 'id', referencedColumnName: 'cart_id' })
  items: CartItem[];
}
