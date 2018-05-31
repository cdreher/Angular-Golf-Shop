import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Product[] = [];

  constructor() { }

  addToCart(product: Product){
    product.place_in_cart = (this.cartProducts.length);
    console.log(product);
    
    this.cartProducts.push(product);  
    console.log(this.cartProducts);
    
  }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }
}
