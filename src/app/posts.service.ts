import { Injectable } from '@angular/core';
import { Post } from './types';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];

  constructor() {}

  addPost(post: Post) {
    // this.posts = [...this.posts, post];
    this.posts.push(post);
  }
}
