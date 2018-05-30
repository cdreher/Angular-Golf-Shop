import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  private url = 'api/login';

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.authService.getUser().subscribe(response => this.user = response);
  }

  save(){
    return this.http.put(this.url, this.user, httpOptions).subscribe(() => this.goBack());
  }

  goBack(){
    this.router.navigate(['home'])
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
