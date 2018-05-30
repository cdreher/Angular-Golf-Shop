import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url='api/login';
  currentUser: User;

  constructor(private _http: HttpClient, private router: Router) { }

  loginUser(users: User[], user: User): User{
    return users.find(x => x.username === user.username && x.password === user.password);
  }

  getUsers(): Observable<User[]>{
    return this._http.get<User[]>(this.url);
  }

  getUser(): Observable<User>{
    const newurl= `${this.url}/${this.currentUser.id}`;
    return this._http.get<User>(newurl);
  }

  setUser(user: User){
    this.currentUser = user;
    
  }

  isAuthenticated(): boolean {
    console.log(this.currentUser);
    return !!this.currentUser;
  }

  logout(){
    this.currentUser = null;
    this.router.navigate(['login']);
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
