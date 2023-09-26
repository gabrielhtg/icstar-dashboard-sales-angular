import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public getJsonValue: any;
  public postJsonValue: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http.get('http://localhost:8080/api/login').subscribe((data) => {
      console.log(data);
    });
  }
}
