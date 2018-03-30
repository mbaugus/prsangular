import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  visibleError = null;
  //imgsrc = 'http://localhost:61165/images/thumb-red-chair.jpg';
  
  constructor(
    private SysSvc: SystemService,
    private router: Router
   ) { }

  login(): void {
    this.visibleError = null;
    console.log('Clicked login');
    this.SysSvc.AttemptLogin(this.username, this.password).subscribe(resp => {
      console.log(resp);
      if ( resp['Status'] !== 'Success' ) {
        this.visibleError = true;
      } else {
         resp['User'].SessionId = resp['Token'];
         this.SysSvc.SetLoggedIn(resp['User']);
         this.router.navigateByUrl('/home');
      }
    });
  }

  ngOnInit() {
    /*
    const user: User = this.SysSvc.GetUser();
    if ( user !== null || user.SessionId !== '') {
      this.router.navigateByUrl('/home');
    }
    */
  }

}
