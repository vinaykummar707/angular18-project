import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const body = {
      name: 'panuganti',
      emai: ""
    };
    this.http
      .post('http://localhost:3000/users', body)
      .subscribe((res) => console.log(res));
  }
}
