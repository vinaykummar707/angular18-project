import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { User, Post } from '../types';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { MaincontentComponent } from '../maincontent/maincontent.component';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { UserTileComponent } from '../user-tile/user-tile.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomButtonComponent,
    SuggestionsComponent,
    UserTileComponent,
    MaincontentComponent,
    FormsModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  title = 'ang18';
  user!: User;

  constructor(
    public userService: UserService,
    public postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

  toProfilePage() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }
}
