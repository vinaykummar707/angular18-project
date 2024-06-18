import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { User } from '../types';
import { UserService } from '../user.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  user!: User;

  tabs = [
    {
      tabName: 'Reels',
      path: 'reels',
    },
    {
      tabName: 'Drafts',
      path: 'drafts',
    },
  ];
  activeTab = 0;

  constructor(
    public userService: UserService,
    public postService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.onTabSelected(this.activeTab);
  }

  onTabSelected(index: number) {
    this.activeTab = index;
    console.log(this.tabs[index]);
    this.router.navigate([`${this.tabs[index].path}`], {
      relativeTo: this.route,
    });
  }
}
