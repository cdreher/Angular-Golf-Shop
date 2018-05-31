import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  products: Product[];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    //get all products for display on home page
    this._productService.getProducts().subscribe(r => this.products = r);
  }

}
