import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { User, UsersResponse } from '../types';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { UserTileComponent } from '../user-tile/user-tile.component';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CustomButtonComponent, UserTileComponent],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css',
})
export class SuggestionsComponent {
  @Input() maxUserLimit: number = 3;
  users: User[] = [];
  usersLimit: number = 3;
  constructor(private http: HttpClient) {
    this.http.get('https://reqres.in/api/users?page=1').subscribe((value) => {
      console.log(value, 'suugestions comp');
      const res: UsersResponse = value as UsersResponse;
      this.users = res.data;
    });
    this.usersLimit = this.maxUserLimit;
  }

  onSeeMore() {
    this.usersLimit = this.users.length;
  }

  onSeeLess() {
    this.usersLimit = this.maxUserLimit;
  }

  onTap(user: User) {
    console.log('tapped', user);
  }

  onFollowClicked(event: User) {
    console.log('now  i am following', event);
  }
}
