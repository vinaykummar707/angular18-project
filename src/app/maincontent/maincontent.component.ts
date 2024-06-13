import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css',
})
export class MaincontentComponent {
  constructor(public userService: UserService) {}
}
