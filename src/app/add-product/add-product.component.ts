import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products = [];
  model: Product = new Product();

  constructor(private service: ProductService) { }

  ngOnInit() {
    //get all products
    this.service.getProducts().subscribe(r => this.products = r);
  }

  add(): void {
    //assign constants to all ngModel fields
    const name: string = this.model.name;
    const brand: string = this.model.brand;
    const category: string = this.model.category;
    const price: number = this.model.price;
    const imageUrl: string = this.model.imageUrl;

    //add product to product list
    this.service.addProduct({ name , brand, category, price, imageUrl } as Product).
    subscribe(p => { this.products.push(p); });
    
    this.service.goBack();
  }

}
