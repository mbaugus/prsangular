import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  user: User;
  pagetitle = 'User detail';

  constructor(
    private UserSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.UserSvc.Remove(this.user)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/users/list');
    });
  }

  getUserById(id) {
    this.UserSvc.Get(id).
    subscribe(user => {
      this.user = user;
      console.log('User: ', user);
    });
  }

  ngOnInit() {
    this.route.params
    .subscribe(parms => {
      const id = parms['id'];
      this.getUserById(id);
    });
  }
}
