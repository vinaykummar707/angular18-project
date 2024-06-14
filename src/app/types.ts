export interface CutomButtonProps {}

export interface UsersResponse {
  data: User[];
}

export interface Post {
  id: string;
  user: User;
  description: string;
  image: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
}

export interface Info {
  peopleFollowing: User[];
  myFollowers: User[];
  post: Post[];
}

export interface User {
  avatar: string;
  email: string;
  first_name: string;
  id?: number;
  last_name?: string;
  posts?: number;
  following?: number;
  followers?: number;
  bio?: string;
  info?: Info;
}
