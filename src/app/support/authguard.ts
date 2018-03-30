import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SystemService } from '../services/system.service';
import { User } from '../models/user';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private SysSvc: SystemService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user: User = this.SysSvc.GetUser();
        console.log(user);
        if ( user && user.SessionId ) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
