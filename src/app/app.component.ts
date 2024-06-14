import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HttpClient } from '@angular/common/http';
import { Post, User, UsersResponse } from './types';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { UserService } from './user.service';
import { UserTileComponent } from './user-tile/user-tile.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { PostsService } from './posts.service';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomButtonComponent,
    SuggestionsComponent,
    UserTileComponent,
    MaincontentComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang18';
  user!: User;

  showCreatePost: boolean = false;

  description!: string;
  imageUrl!: string;

  constructor(
    private http: HttpClient,
    public userService: UserService,
    public postService: PostsService
  ) {}

  ngOnInit() {
    this.user = this.userService.user;
  }

  callApi() {}

  onSignUp(event: any) {
    console.log('event from app', event);
  }

  toggleCreatePost() {
    this.showCreatePost = !this.showCreatePost;
  }

  onContinue(event: any) {
    console.log('event from app', event);
  }

  onDescriptionChange(event: any) {
    this.description = event.target.value;
    console.log(this.description);
  }

  onImageSrchange(event: any) {
    this.imageUrl = event.target.value;
    console.log(this.description);

    console.log(this.imageUrl);
  }

  submitPost() {
    if (
      (this.description !== undefined && this.description.length > 0) ||
      (this.imageUrl !== undefined && this.imageUrl.length > 0)
    ) {
      let newPost: Post = {
        description: this.description,
        image: this.imageUrl,
        commentsCount: 0,
        likesCount: 0,
        id: 'id1',
        sharesCount: 0,
        user: {
          first_name: 'John Doe',
          avatar:
            'https://images.unsplash.com/photo-1716195563015-e934b8e7d63c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D',
          email: new Date().toLocaleString(),
        },
      };

      console.log(newPost);
      this.postService.addPost(newPost);
      this.description = '';
      this.imageUrl = '';
      this.showCreatePost = false;
    } else {
      alert('Description and image is mandatory');
    }
  }
}
