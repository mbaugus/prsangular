import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:61165/Login';

@Injectable()
export class SystemService {

  @Output() LoggedInAs: EventEmitter<any> = new EventEmitter();
  User: User = null;
  constructor(private http: HttpClient) {
      this.RemoveUser();
    }

  SetLoggedIn(user: User) {
    this.User = user;
    this.LoggedInAs.emit(user);
  }
  GetUserRole() {
    if (this.User) {
      if (this.User.IsAdmin) {
        return 'admin';
      } else if (this.User.IsReviewer) {
        return 'reviewer';
      } else {
        return 'user';
      }
    }
    return '';
  }
  LogOut() {
    this.User = null;
    return this.http.get(url + '/Logout') as Observable<any>;
  }
  RemoveUser(): void {
    this.User = null;
    this.LoggedInAs.emit(null);
  }
  GetUser(): User {
    return this.User;
  }
  AttemptLogin(username: string, password: string) {
    return this.http.post(url , { user: username, pw: password }) as Observable<any>;
  }
  CheckIfSessionValid()  {
    return this.http.post(url + '/ping', { test: 'test' }) as Observable<any>;
  }

}
