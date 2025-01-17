import { Injectable, signal, WritableSignal } from '@angular/core';
import { CartItem } from '../cart-item.model';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItemsSignal: WritableSignal<CartItem[]> = signal([])

  getCartItems() {
    return this.cartItemsSignal.asReadonly();
  }

  addProductToCart(product: Product, quantity: number = 1) {
    const currentCart = this.cartItemsSignal();
    const itemIndex = currentCart.findIndex((item) => item.product.id === product.id);

    if (itemIndex === -1) {
      this.cartItemsSignal.set([...currentCart, { product, quantity }]);
    } else {
      const updatedCart = [...currentCart];
      updatedCart[itemIndex].quantity += quantity;
      this.cartItemsSignal.set(updatedCart);
    }
  }

  removeProductFromCart(productId: number) {
    const updatedCart = this.cartItemsSignal().filter((item) => item.product.id !== productId);
    this.cartItemsSignal.set(updatedCart);
  }

  updateProductQuantity(productId: number, quantity: number) {
    const currentCart = this.cartItemsSignal();
    const itemIndex = currentCart.findIndex((item) => item.product.id === productId);

    if (itemIndex !== -1) {
      const updatedCart = [...currentCart];
      updatedCart[itemIndex].quantity = quantity;
      this.cartItemsSignal.set(updatedCart);
    }
  }

  clearCart() {
    this.cartItemsSignal.set([]);
  }
}
