import { Component, OnInit } from '@angular/core';
import { SystemService } from './services/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn = true;
  constructor(private SysSvc: SystemService,
              private router: Router) {}

  ngOnInit() {
    this.SysSvc.CheckIfSessionValid().subscribe(resp => {
      if ( resp['Status'] === 'Failure') {
        this.SysSvc.LogOut();
        this.router.navigateByUrl('/logout');
      }
      console.log(resp);
    });
  }
}
