import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private location: Location) { }
  clickforward(): void {
    this.location.forward();
  }

  clickback(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
