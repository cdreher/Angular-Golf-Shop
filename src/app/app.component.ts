import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Golf Pro Shop';
  isLoggedIn = false;
  currentUser: User;

  constructor(private _authService: AuthService) {
  }

  ngOnInit(){
    this.isLoggedIn = this._authService.isAuthenticated();
    console.log(this.isLoggedIn);
    
  }

  signOut(): void{
    this.isLoggedIn = false;
    this._authService.logout();
  }

  
}
