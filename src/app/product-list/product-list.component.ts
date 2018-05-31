import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { User } from '../user';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  user: User;
  filteredProducts: Product[];
  isFiltered: boolean = false;
  _listFilter: string = '';
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(filter: string){
    //console.log(filter);
    this._listFilter = filter;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;

  }

  constructor(private _srvc: ProductService) { }

  ngOnInit() {
    //get all products
    this._srvc.getProducts().subscribe(response => {
      this.products = response;
    });

    //display filtered products
    this._srvc.getProducts().subscribe(response => this.filteredProducts = response);
  }

  performFilter(filter: string): Product[] {
    this.isFiltered = true;

    //apply filter to list of products
    return this.products.filter((product: Product) => 
      product.name.toLocaleLowerCase().indexOf(filter) !== -1 ||
      product.brand.toLocaleLowerCase().indexOf(filter) !== -1 || 
      product.category.toLocaleLowerCase().indexOf(filter) !== -1);
  }

  setFilter(filter:string): void {
    this._listFilter = filter;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  //reset filter, displaying all products again
  clear(filter: string): void{
    this._listFilter = filter;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    this.isFiltered = false;;
  }


}
