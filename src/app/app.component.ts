import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HttpClient } from '@angular/common/http';
import { User, UsersResponse } from './types';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomButtonComponent, SuggestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang18';
  users: User[] = [];

  constructor(private http: HttpClient) {}

  callApi() {
  
  }

  onSignUp(event: any) {
    console.log('event from app', event);
  }

  onContinue(event: any) {
    console.log('event from app', event);
  }
}
