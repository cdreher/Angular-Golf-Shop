import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AppComponent } from '../app.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[];
  totalPrice: number = 0.00;
  index: number =0;
  product: Product = new Product();
  totalItems: number;

  constructor(private cartService: CartService, private app: AppComponent) { }

  ngOnInit() {
    //get products in cart, and find total price of user's cart
    this.cartProducts = this.cartService.getCartProducts();
    for (let p of this.cartProducts){
      this.totalPrice += p.subtotal;
      console.log(this.totalPrice);
    }
    this.totalItems = this.app.totalCartItems;
  }

  delete(id: number){
    console.log(" id: " + id);
    //delete product from user's cart
    this.cartProducts.splice(id, 1);

    //reset total price and total cart items
    this.app.totalCartItems=0;
    this.totalPrice = 0;
    this.index = 0;

    //get total price and total cart items
    for (let p of this.cartProducts){
      p.place_in_cart = this.index;
      this.index++;
      this.app.totalCartItems += p.quantity;
      this.totalPrice += p.subtotal;
      console.log(this.totalPrice);
    }
    this.totalItems = this.app.totalCartItems;
  }

  setPlace(id: number){
    console.log("hi: " + id);
    this.product = this.cartProducts.find(x => x.place_in_cart == id);
    
  }

  //change product quantity in cart
  changeQuantity(newQuantity: number){
    console.log("id:" + this.product.place_in_cart);

    this.product.quantity = +newQuantity;

    //reset total price, subtotal, and total cart itmes
    this.app.totalCartItems = 0;
    this.totalPrice = 0;
    this.product.subtotal = newQuantity * this.product.price;

    //get total price and total cart items
    for (let p of this.cartProducts){
      this.app.totalCartItems += p.quantity;
      this.totalPrice += p.subtotal;
      console.log(this.totalPrice);
    }
    this.totalItems = this.app.totalCartItems;

  }



}
