import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user: User = new User(0, '', '', '', '', '', '', true, false, true, 0);

  pagetitle = 'Create User';
  constructor(
    private UserSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  create(): void {
    console.log(this.user);
    this.UserSvc.Create(this.user).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/users/list');
    });
  }

  ngOnInit() {}
}
