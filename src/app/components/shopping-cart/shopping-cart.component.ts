import { Component, Signal } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from '../../cart-item.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItemsSignal!: Signal<CartItem[]>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartItemsSignal = this.shoppingCartService.getCartItems();
  }

  removeItem(productId: number) {
    this.shoppingCartService.removeProductFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number) {
    this.shoppingCartService.updateProductQuantity(productId, quantity);
  }
}
