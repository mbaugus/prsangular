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
            const permission = route.data['permission'];
            console.log(state.url);
            console.log('Returned from get user', user);
            if (!permission) { throw  new Error('No permissions seutp on this route'); }
            if (!permission.only.length) { throw new Error('No rules in permission setup.'); }

            if ( !user || !user.SessionId ) {
                console.log('Bad user');
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            }

            let role = '';
            if (user.IsAdmin) {
                role = 'admin';
            } else if (user.IsReviewer) {
                role = 'review';
            } else {
                role = 'user';
            }
            const willActivate = permission.only.includes(role);
            console.log('willactivate ', willActivate);
            if ( !willActivate ) {
                this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
                return false;
            } else {
                return true;
            }
    }
}
