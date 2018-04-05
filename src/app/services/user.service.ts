import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs/Observable';
import { User } from '../models/user';

const url = 'http://localhost:61165/Users/';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  List(): Observable<User[]> {
    return this.http.get(url + 'List') as Observable<User[]>;
  }
  Get(id: string): Observable<User> {
    return this.http.get(url + 'Get/' + id) as Observable<User>;
  }
  Create(user: User): Observable<any> {
    return this.http.post(url + 'Create', user) as Observable<any>;
  }
  Change(user: User): Observable<any> {
    return this.http.post(url + 'Update', user) as Observable<any>;
  }
  Remove(user: User): Observable<any> {
    return this.http.post(url + 'Remove', user) as Observable<any>;
  }
  ChangePassword(oldpassword: string, newpassword: string): Observable<any> {
    return this.http.post(url + 'Changepw', {oldpassword, newpassword});
  }
}
