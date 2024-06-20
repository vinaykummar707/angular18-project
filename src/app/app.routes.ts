import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ReelsPageComponent } from './reels-page/reels-page.component';
import { DraftsPageComponent } from './drafts-page/drafts-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignUpPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'posts',
        component: PostsPageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        children: [
          {
            path: 'reels',
            component: ReelsPageComponent,
          },
          {
            path: 'drafts',
            component: DraftsPageComponent,
          },
        ],
      },

      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
