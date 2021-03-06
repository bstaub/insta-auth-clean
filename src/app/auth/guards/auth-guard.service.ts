import {AuthService} from '../auth.service';
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService,
              ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    // return this.userService.getUser(this.userService.currentUserId()).pipe(
    return this.userService.getUser(this.authService.getAuthUser().uid).pipe(
      take(1),
      map(user => user.roles.authuser ? true : false),
      tap(isAdmin => {
        if (!isAdmin) {
          console.error('Access denied - Authuser only allowed');
        }
      })
    );


    /*
    return this.authService.user$.pipe(
      take(1),
      map(user => user.roles.authuser ? true : false),
      tap(isAdmin => {
        if (!isAdmin) {
          console.error('Access denied - Admin only allowed');
        }
      })
    );
    */




  }

}
