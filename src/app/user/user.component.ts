import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  updateSaved = false;
  private url = 'api/users';

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    //get user
    this.authService.getUser().subscribe(response => this.user = response);
  }

  save(){
    //save user to in memory database server
    return this.http.put(this.url, this.user, httpOptions).subscribe(() => {
      this.update();
    });
  }

  update(){
    this.updateSaved = true;
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
