import { Product } from "./product.model";
import { Dress } from "./product.model";
import { Trousers } from "./product.model";
import {Hat } from "./product.model";


export interface CartItem {
    product: Product;
    quantity: number;
    size: m;
}
export interface CartItem {
    product: Dress;
    quantity: number;
    size: m;
}
export interface CartItem {
    product: Trousers;
    quantity: number;
    size: m;
}
export interface CartItem {
    product: Hat;
    quantity: number;
    size: m;
}