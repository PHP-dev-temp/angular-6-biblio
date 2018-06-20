import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/index';
import {CurrentUserService} from './user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private userService: CurrentUserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(!this.userService.userIsAdmin()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
