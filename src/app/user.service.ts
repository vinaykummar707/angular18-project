import { Injectable } from '@angular/core';
import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    avatar:
      'https://images.pexels.com/photos/21952102/pexels-photo-21952102/free-photo-of-a-car-parked-in-front-of-a-building-with-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_name: 'Vinay',
    last_name: 'Panuganti',
    email: 'vinay@email.com',
    bio: 'Full Stack Developer',
    followers: 5,
    following: 0,
    posts: 12,
    info: {
      myFollowers: [],
      peopleFollowing: [],
      post: [],
    },
  };

  increaseFollowing(followedUser: User) {
    this.user.following! += 1;
    this.user.info?.peopleFollowing.push(followedUser);
    console.log(this.user);
  }
}
