import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {AuthService} from '../auth/auth.service';
import {AuthGuard} from '../auth/guards/auth-guard.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from '../auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  name: string;
  uid: string;
  email: string;

  constructor(private _firebaseAuth: AngularFireAuth, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {

    this._firebaseAuth.auth.onAuthStateChanged( userData => {
      // we are logged in
      console.log('ngOnInit000', userData);

      // debugger;
      if (userData && userData.emailVerified ) {
        // debugger;

        const user =  this.userService.getProfileFromLocalStorage();
        // debugger;
        this.name = user.username;
        this.email = user.email;
        this.uid = user.id;

        console.log(user);
        console.log(this.uid);

        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

  }



  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }



}
