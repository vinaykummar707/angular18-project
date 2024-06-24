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
import { Store } from '@ngrx/store';
import { incrementCounter } from './counter.actions';

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
  constructor(private store: Store<{ counter: number }>) {}

  ngOnInit() {
    this.store.select('counter').subscribe((value) => console.log(value));
    this.store.dispatch(incrementCounter());
  }
}
