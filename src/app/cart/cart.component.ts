import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[];
  totalPrice: number = 0.00;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();
    for (let p of this.cartProducts){
      this.totalPrice += p.subtotal;
      console.log(this.totalPrice);
      
    }
  }

  delete(id: number){
    console.log(id);
    this.cartProducts.splice(id, 1);
    this.totalPrice = 0;
    for (let p of this.cartProducts){
      this.totalPrice += p.subtotal;
      console.log(this.totalPrice);
      
    }
  }



}
