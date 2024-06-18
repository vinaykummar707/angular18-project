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

}
