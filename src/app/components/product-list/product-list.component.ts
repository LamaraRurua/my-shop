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
    { id: 1, name: "Product 1",size: "m",  price: 100 },
    { id: 2, name: "Product 2", size: "m", price: 200 },
    { id: 3, name: "Product 3",size: "m", price: 300 },
    { id: 4, name: "Dress",size: "m", price: 50 },
    { id: 5, name: "Trousers", size: "m", price: 50 },
    { id: 6, name: "Hat", size: "m", price: 30 }
  ];

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart(product: Product) {
    this.shoppingCartService.addProductToCart(product, 1);
  }
}
