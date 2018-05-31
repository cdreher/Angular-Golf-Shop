import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  cart: Product[];
  addToCartValid = false;

  constructor(private route: ActivatedRoute, private service: ProductService, private cartService: CartService, private app: AppComponent) { }

  ngOnInit() {
    //get id from path
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    //get product from id
    this.service.getProduct(id).subscribe(response => this.product = response);
  }

  order(product: Product, quan: number): void{
    //if the quantity is placeholder, set value to 1
    if(+quan == 0){
      quan = 1;
    }

    //find subtotal
    this.product.quantity = +quan;
    this.product.subtotal = +quan * this.product.price;

    //add product to cart
    this.cartService.addToCart(this.product);

    //display success
    this.addToCartValid = true;

    //change total cart items
    this.app.totalCartItems += this.product.quantity;
  }

}
