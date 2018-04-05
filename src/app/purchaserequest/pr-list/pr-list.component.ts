import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {
  pagetitle = 'Purchase Request List';
  prs: PurchaseRequest[] = [];

  constructor(private PurchaseRequestSvc: PrService,
              private UserSvc: UserService) { }
  ngOnInit() {
    this.PurchaseRequestSvc.List().subscribe(purchaserequests => {
      console.log(purchaserequests);
      this.prs = purchaserequests;
    });
  }
}
