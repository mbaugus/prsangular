import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:61165/Login';

@Injectable()
export class SystemService {

  @Output() LoggedInAs: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }
  SetLoggedIn(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.LoggedInAs.emit(user.Username);
  }
  LogOut() {
    return this.http.get(url + '/Logout') as Observable<any>;
  }
  RemoveUser(): void {
    localStorage.removeItem('currentUser');
    this.LoggedInAs.emit('');
  }
  GetUser(): User {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    return user;
  }
  AttemptLogin(username: string, password: string) {
    return this.http.post(url , { user: username, pw: password }) as Observable<any>;
  }

}
