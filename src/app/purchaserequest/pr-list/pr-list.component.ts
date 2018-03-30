import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {
  pagetitle = 'Purchase Request List'
  prs: PurchaseRequest[] = [];
  constructor(private PurchaseRequestSvc: PrService) { }
  ngOnInit() {
    this.PurchaseRequestSvc.List().subscribe(purchaserequests => {
      console.log(purchaserequests);
      this.prs = purchaserequests;
    });
  }
}
