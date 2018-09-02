import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllPostComponent} from './all-post/all-post.component';
import {FollowingComponent} from './following/following.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {MyPostsComponent} from './my-posts/my-posts.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/guards/auth-guard.service';
import {ProfileComponent} from './auth/profile/profile.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';


const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'allposts', component: AllPostComponent, canActivate: [AuthGuard]},
  {path: 'following', component: FollowingComponent, canActivate: [AuthGuard]},
  {path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
  {path: 'myposts', component: MyPostsComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'resetpw', component: ResetPasswordComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);
