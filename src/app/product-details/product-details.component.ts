import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  cart: Product[];
  addToCartValid = false;

  constructor(private route: ActivatedRoute, private service: ProductService, private cartService: CartService) { }

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
    this.cartService.addToCart(this.product);
    this.addToCartValid = true;
  }

}
