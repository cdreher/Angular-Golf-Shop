import { Component } from '@angular/core';
import { User } from './user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Golf Pro Shop';
  isLoggedIn = false;
  currentUser: User;
  totalCartItems = 0;

  constructor(private _authService: AuthService) {
  }

  ngOnInit(){
    //log in user is they are authenticated properly
    this.isLoggedIn = this._authService.isAuthenticated();    
  }

  //sign out user
  signOut(): void{
    this.isLoggedIn = false;
    this._authService.logout();
  }

  
}
