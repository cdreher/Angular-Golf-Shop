import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

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
    this.service.getProducts().subscribe(r => this.products = r);
  }

  add(): void {
    const name: string = this.model.name;
    const brand: string = this.model.brand;
    const category: string = this.model.category;
    const price: number = this.model.price;
    const imageUrl: string = this.model.imageUrl;
    
    console.log(this.model.name + " " + this.model.brand + " " + this.model.category
      + " " + this.model.price);

    this.service.addProduct({ name , brand, category, price, imageUrl } as Product).
    subscribe(p => { this.products.push(p); });
    
    console.log("hello");
    this.service.goBack();
  }

}
