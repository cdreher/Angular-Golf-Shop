import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'api/products';
  private userURL = 'api/login';

  constructor(private _http: HttpClient, private route: Router) { }

  getProduct(id: number): Observable<Product> {
    const newUrl = `${this.url}/${id}`;
    return this._http.get<Product>(newUrl);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.url);
  }

  addProduct(product: Product): Observable<Product> {
    console.log(product.name + " " + product.brand + " " + product.category + " " + product.price)
    return this._http.post<Product>(this.url, product, httpOptions);
  }

  goBack(): void{
    this.route.navigate(['products']);
  }

}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
