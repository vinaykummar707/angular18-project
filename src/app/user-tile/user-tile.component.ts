import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../types';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-tile',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './user-tile.component.html',
  styleUrl: './user-tile.component.css',
})
export class UserTileComponent {
  @Input() user: User = {
    first_name: 'Sample User',
    email: 'sample@email.com',
    avatar: '',
  };

  @Input() showButtons!: boolean;

  isFollowing: boolean = false;

  @Output() follow = new EventEmitter<User>();

  constructor() {}

  onTap(user: User) {
    this.isFollowing = true;
    this.follow.emit(user);
  }
}
