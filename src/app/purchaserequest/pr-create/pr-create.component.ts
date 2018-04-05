import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PrService } from '../../services/pr.service';
import { User } from '../../models/user';
import { PurchaseRequest } from '../../models/purchaserequest';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PrCreateComponent implements OnInit {
  pagetitle = 'New purchase request';
  pr: PurchaseRequest = new PurchaseRequest(
    0, 0, '' , '', '', '', '', 0, true, '', '', '' , 0, null, null);
  constructor(
    private prSvc: PrService,
    private router: Router) { }

    create(): void {
      this.prSvc.Create(this.pr).subscribe(resp => {
        console.log(resp);
        if (resp['Status'] === 'Success') {
          // take to the edit screen
          if (resp['Id'] != null) {
            this.router.navigateByUrl('/purchaserequests/detail/' + resp['Id'] );
          } else {
            this.router.navigateByUrl('/purchaserequests/list/');
          }
        } else {
          // show error
        }
      });
    }
  ngOnInit() {

  }

}
