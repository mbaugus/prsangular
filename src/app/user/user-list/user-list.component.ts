import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  pagetitle = 'User List';
  constructor(private UserSvc: UserService) { }

  ngOnInit() {
    this.UserSvc.List().subscribe(users =>
    this.users = users);
  }

}
