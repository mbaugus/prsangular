import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';

@Component({
  selector: 'app-pr-reviewlist',
  templateUrl: './pr-reviewlist.component.html',
  styleUrls: ['./pr-reviewlist.component.css']
})

export class PrReviewlistComponent implements OnInit {
  pagetitle = 'Purchase Request review';
  prs: PurchaseRequest[] = [];
  constructor(private PurchaseRequestSvc: PrService) { }
  ngOnInit() {
    this.PurchaseRequestSvc.List().subscribe(purchaserequests => {
      console.log(purchaserequests);
      this.prs = purchaserequests;
    });
  }

}
