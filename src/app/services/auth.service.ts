import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url='api/users';
  currentUser: User;

  constructor(private _http: HttpClient, private router: Router) { }

  //find user in list of users (found in in memory db server)
  loginUser(users: User[], user: User): User{
    return users.find(x => x.username === user.username && x.password === user.password);
  }

  //create user in in memory db server
  signUp(user: User): Observable<User> {
    return this._http.post<User>(this.url, user, httpOptions);
  }

  //get all users from in mem db server
  getUsers(): Observable<User[]>{
    return this._http.get<User[]>(this.url);
  }

  //find single user from in mem db server
  getUser(): Observable<User>{
    const newurl= `${this.url}/${this.currentUser.id}`;
    return this._http.get<User>(newurl);
  }

  //set user
  setUser(user: User){
    this.currentUser = user;
    
  }

  //decide if user is authenticated properly or not
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  //log user out
  logout(){
    this.currentUser = null;
    this.router.navigate(['login']);
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
