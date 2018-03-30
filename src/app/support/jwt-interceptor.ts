import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '../services/system.service';
import { User } from '../models/user';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private SysSvc: SystemService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const user: User = this.SysSvc.GetUser();

        if (user != null && user.SessionId != null) {
            const id = user.SessionId;
            request = request.clone({
                setHeaders: {
                    Authorization: `${id}`
                }
            });
        }
        return next.handle(request);
    }
}
