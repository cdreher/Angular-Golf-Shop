import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { AppComponent } from '../app.component';

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
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getProduct(id).subscribe(response => this.product = response);
  }

  order(product: Product, quan: number): void{
    if(+quan == 0){
      quan = 1;
    }
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
