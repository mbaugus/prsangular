import { Component, OnInit } from '@angular/core';
import {MenuItemComponent} from '../menu-item/menu-item.component';
import { Menu } from '../menu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu('Requests', '/purchaserequests/list', 'Go to the purchase request list', true),
    new Menu('Vendors', '/vendors/list', 'Go to Vendors List', true),
    new Menu('Products', '/products/list', 'Go to Product List', true),
    new Menu('Users', '/users/list', 'Go to Users List', true),
    new Menu('About', '/about', 'About this website', true),
  ];
  constructor(private route: Router) { }

  ngOnInit() {
      console.log(this.route.url);
  }
}
