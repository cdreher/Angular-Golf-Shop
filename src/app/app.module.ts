import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { DashComponent } from './dash/dash.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { InMemDatabaseService } from './services/in-mem-database.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: DashComponent},
  { path: 'products', children:[
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailsComponent }
    ] 
  },
  { path: 'add', component: AddProductComponent },
  { path:'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'cart', component: CartComponent},
  { path: 'user', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    DashComponent,
    AddProductComponent,
    LoginComponent,
    UserComponent,
    SignUpComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(InMemDatabaseService, {dataEncapsulation: false})
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
