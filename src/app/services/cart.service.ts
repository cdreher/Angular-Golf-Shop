import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Product[] = [];

  constructor() { }

  addToCart(product: Product){
    //associate product with its spot in the cart
    product.place_in_cart = (this.cartProducts.length);
    console.log(product);
    
    //add product to cart
    this.cartProducts.push(product);  
    console.log(this.cartProducts);
    
  }

  //get all products in cart
  getCartProducts(): Product[] {
    return this.cartProducts;
  }
}
