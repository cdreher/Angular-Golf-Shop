import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { InMemDatabaseService } from './in-mem-database.service';
import { DashComponent } from './dash/dash.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
    SignUpComponent
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