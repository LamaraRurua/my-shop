import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { NgFor } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Dress ", price: 70 },
    { id: 5, name: "Trousers", price: 70 },
    { id: 6, name: "Hat", price: 50 }
  ];

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart(product: Product) {
    this.shoppingCartService.addProductToCart(product, 1);
  }
}
