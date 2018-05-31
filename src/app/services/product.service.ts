import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'api/products';
  private userURL = 'api/login';

  constructor(private _http: HttpClient, private route: Router) { }

  //get product from in mem db server
  getProduct(id: number): Observable<Product> {
    const newUrl = `${this.url}/${id}`;
    return this._http.get<Product>(newUrl);
  }

  //get all products from list in in mem db server
  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.url);
  }

  //create new product on mem db server
  addProduct(product: Product): Observable<Product> {
    console.log(product.name + " " + product.brand + " " + product.category + " " + product.price)
    return this._http.post<Product>(this.url, product, httpOptions);
  }

  //go back to products page
  goBack(): void{
    this.route.navigate(['products']);
  }

}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
