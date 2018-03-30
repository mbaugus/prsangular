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
  Name = '';
  menuItems: Menu[] = [
    new Menu('Requests', '/purchaserequests/list', 'Go to the purchase request list', true),
    new Menu('Vendors', '/vendors/list', 'Go to Vendors List', true),
    new Menu('Products', '/products/list', 'Go to Product List', true),
    new Menu('Users', '/users/list', 'Go to Users List', true),
    new Menu('About', '/about', 'About this website', true),
  ];
  constructor(private route: Router,
              private SysSvc: SystemService
            ) { }

  logout(): void {
    this.SysSvc.LogOut().subscribe(resp => {
      this.SysSvc.RemoveUser();
      this.LoggedIn = false;
      this.Name = '';
      console.log(resp);
      this.route.navigateByUrl('/login');
    });
  }
  ngOnInit() {
      const user: User = this.SysSvc.GetUser();
      if (user !== null) {
          this.LoggedIn = true;
          this.Name = user.Username;
      }

    this.SysSvc.LoggedInAs.subscribe(name => {
      this.Name = name;
      if ( name === '') {
        this.LoggedIn = false;
      } else {
        this.LoggedIn = true;
      }
    });
  }
}
