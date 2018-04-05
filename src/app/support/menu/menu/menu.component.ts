import { Component, OnInit } from '@angular/core';
import {MenuItemComponent} from '../menu-item/menu-item.component';
import { Menu } from '../menu';
import { Router } from '@angular/router';
import { SystemService } from '../../../services/system.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  LoggedIn = false;
  dropDownClicked = false;
  Name = '';
  Permission = '';
  menuItems: Menu[] = [
    new Menu('Requests', '/purchaserequests/list', 'Go to the purchase request list', true, ['admin', 'review', 'user']),
    new Menu('Vendors', '/vendors/list', 'Go to Vendors List', true, ['admin', 'review', 'user']),
    new Menu('Products', '/products/list', 'Go to Product List', true, ['admin', 'review', 'user']),
    new Menu('Users', '/users/list', 'Go to Users List', true, ['admin']),
    new Menu('Review', '/purchaserequests/reviewlist', 'Review purchase requests', true, ['admin', 'review']),
  ];
  constructor(private route: Router,
              private SysSvc: SystemService
            ) { }

  logout(): void {
    this.SysSvc.LogOut().subscribe(resp => {
      this.SysSvc.RemoveUser();
      this.LoggedIn = false;
      this.Name = '';
      this.Permission = '';
      console.log(resp);
      this.route.navigateByUrl('/login');
    });
  }

  dropdownclick(): void {
    console.log('Clicked');
    this.dropDownClicked = !this.dropDownClicked;
  }
  ngOnInit() {
    this.setSubscription();
  }

    setPermissions(): void {
      const user: User = this.SysSvc.GetUser();
      if (user !== null) {
          this.LoggedIn = true;
          this.Name = user.Username;
          this.Permission = user.GetRole();
          console.log('Role ', this.Permission);
      }
    }

    setSubscription() {
    this.SysSvc.LoggedInAs.subscribe(name => {
        this.setPermissions();
    });
  }
}
