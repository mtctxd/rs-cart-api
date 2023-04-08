import { CartItem } from 'src/database/entities/cart-item.entity';
import { Cart } from 'src/database/entities/cart.entity';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export function calculateCartTotal(cart: Cart): number {
  console.log(cart);

  if (!cart) {
    return 0;
  }

  return cart.items.reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);
}
