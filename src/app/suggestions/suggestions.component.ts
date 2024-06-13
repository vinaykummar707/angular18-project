import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { User, UsersResponse } from '../types';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { UserTileComponent } from '../user-tile/user-tile.component';
import { SuggestionsService } from '../suggestions.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CustomButtonComponent, UserTileComponent],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css',
})
export class SuggestionsComponent {
  @Input() maxUserLimit!: number;
  users: User[] = [];
  usersLimit!: number;
  pageNumber: number = 1;

  constructor(
    private suggestionService: SuggestionsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }

  getUsers() {
    this.suggestionService
      .getUsersByPage(this.pageNumber)
      .subscribe((value) => {
        // value.data.forEach((user) => this.users.push(user));
        if (value.data) this.users = [...this.users, ...value.data];

        console.log([...this.users]);
      });
  }

  onSeeMore() {
    // this.usersLimit = this.users.length;
    this.pageNumber += 1;
    this.getUsers();
  }

  onSeeLess() {
    this.usersLimit = this.maxUserLimit;
  }

  onTap(user: User) {
    console.log('tapped', user);
  }

  onFollowClicked(user: User) {
    console.log('now  i am following', user);
    this.userService.increaseFollowing(user);
  }
}
