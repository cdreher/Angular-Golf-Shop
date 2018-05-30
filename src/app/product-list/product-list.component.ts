import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { User } from '../user';

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
    this._srvc.getProducts().subscribe(response => {
      this.products = response;
      console.log(this.products);
      
    });
    this._srvc.getProducts().subscribe(response => this.filteredProducts = response);
    //this.filteredProducts = this.products;
    //console.log(this.isFiltered);
  }

  hi(): void{
    console.log("hi");
  }

  performFilter(filter: string): Product[] {
    console.log(filter);
    this.isFiltered = true;
    return this.products.filter((product: Product) => 
      product.name.toLocaleLowerCase().indexOf(filter) !== -1 ||
      product.brand.toLocaleLowerCase().indexOf(filter) !== -1 || 
      product.category.toLocaleLowerCase().indexOf(filter) !== -1);
  }

  setFilter(filter:string): void {
    this._listFilter = filter;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  clear(filter: string): void{
    this._listFilter = filter;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    this.isFiltered = false;;
  }


}
