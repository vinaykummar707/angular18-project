export interface CutomButtonProps {}

export interface UsersResponse {
  data: User[];
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
}
