import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  currentUser: User = new User();
  temp: User = new User();
  model: User = new User();
  users: User[];
  createInvalid = false;

  constructor(private _authService: AuthService, private router: Router, private app: AppComponent) { }

  ngOnInit() {
  }

  signup(): void{
    const username = this.model.username;
    const password = this.model.password;

    //get all users, and create user if need be
    this._authService.getUsers().subscribe(resp => {
      this.users = resp;

      //get current user
      this.currentUser = (this._authService.loginUser(this.users, {username: username, password:password} as User));
      
      //if a user exists with those credentials, alert user
      //if user does not exist, create that user and log them in by default
      if(this.currentUser){
        this.createInvalid = true
      }
      else{
        this._authService.signUp({username: username, password: password} as User).subscribe(r => {
          this.currentUser = r;
          this._authService.setUser(this.currentUser);
          
          //log in user after creating them
          if(!this._authService.isAuthenticated()){
          } else {
            this.app.isLoggedIn = true;
            this.app.currentUser = this.currentUser;
            this.router.navigate(['home']);
          }
        }); 
      } 
    });
  }
}
