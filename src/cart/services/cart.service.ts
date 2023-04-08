import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';
import { Cart, CartStatus } from 'src/database/entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async findByUserId(userId: string): Promise<Cart> {
    const carts = await this.cartRepository.findOne({
      where: {
        user_id: userId,
      },
      relations: {
        items: true,
      },
    });

    return carts;
  }

  createByUserId(userId: string): Cart {
    const cartToInsert: Cart = {
      items: [],
      status: CartStatus.OPEN,
      updated_at: Date.now(),
      user_id: userId,
    };

    return cartToInsert;
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(
    userId: string,
    updatedCart: Partial<Cart>,
  ): Promise<Cart> {
    let cart = await this.findByUserId(userId);

    cart = {
      ...cart,
      ...updatedCart,
    };

    await this.cartRepository.save(cart);

    return this.findByUserId(userId);
  }

  async removeByUserId(userId): Promise<void> {
    await this.cartRepository.delete({ user_id: userId });
  }
}
