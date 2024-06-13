import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HttpClient } from '@angular/common/http';
import { User, UsersResponse } from './types';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { UserService } from './user.service';
import { UserTileComponent } from './user-tile/user-tile.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomButtonComponent, SuggestionsComponent, UserTileComponent, MaincontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang18';
  user!: User;
  constructor(private http: HttpClient, public userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }

  callApi() {}

  onSignUp(event: any) {
    console.log('event from app', event);
  }

  onContinue(event: any) {
    console.log('event from app', event);
  }
}
