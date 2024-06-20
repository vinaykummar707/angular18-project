import { Injectable } from '@angular/core';
import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    avatar:
      'https://img.freepik.com/free-photo/digital-art-portrait-person-listening-music-headphones_23-2151065085.jpg?t=st=1718516838~exp=1718520438~hmac=16c6204c314eb45a756ff3fc20265ce4df9695e2c8d666e0e9ffcbbfc39a85a6&w=360',
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
