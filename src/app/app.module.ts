import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AllPostComponent } from './all-post/all-post.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FollowingComponent } from './following/following.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/guards/auth-guard.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import {UserService} from './auth/user.service';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { NotificationComponent } from './notification/notification.component';
import {NotificationService} from './shared/notification.service';
import {StorageService} from './shared/storage.service';
import {AngularFireStorageModule} from 'angularfire2/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostComponent,
    FavoritesComponent,
    FollowingComponent,
    MyPostsComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ResetPasswordComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'instaclone'),
    AngularFireDatabaseModule, // for database
    AngularFirestoreModule, // cloud firestore
    AngularFireAuthModule,  // do auth login register stuff
    AngularFireStorageModule  // do file store stuff
  ],
  providers: [AuthService, AuthGuard, UserService, NotificationService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
