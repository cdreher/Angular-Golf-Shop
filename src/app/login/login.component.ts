import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser: User = new User();
  users: User[];
  model: User = new User();
  loginInvalid = false;

  constructor(private _authService: AuthService, private router: Router, private app: AppComponent) { }

  ngOnInit() {
  }

  login(): void{
    const username: string = this.model.username;
    const password: string = this.model.password;

    this._authService.getUsers().subscribe(r => {
      this.users = r;
      this.currentUser = (this._authService.loginUser(this.users, {username, password} as User));
      this._authService.setUser(this.currentUser);

      if(!this._authService.isAuthenticated()){
        this.loginInvalid = true;
      } else {
        this.app.isLoggedIn = true;
        this.app.currentUser = this.currentUser;
        this.router.navigate(['home']);
      }
    });
  }
}
