import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})

export class UserAccountComponent implements OnInit {
  changingpw = false;
  sendingchange = false;
  pagetitle = 'Account';
  errormsg = '';
  oldpw: string;
  newpw: string;
  constructor(private UserSvc: UserService) { }

  ngOnInit() {
  }

  Submitpw(): void {
    console.log(this.oldpw + ' ' , this.newpw);
    this.sendingchange = true;
    this.errormsg = '';
    this.UserSvc.ChangePassword(this.oldpw, this.newpw).subscribe(resp => {
      console.log(resp);
      this.sendingchange = false;
      if (resp['Status'] === 'Failure') {
        this.errormsg = resp['Message'];
      } else {
        this.changingpw = false;
      }
    });
  }
}
