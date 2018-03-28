import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrliService } from '../../services/prli.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})

export class PrDetailComponent implements OnInit {
  pr: PurchaseRequest;
  prli: {};
  constructor(
    private PurchaseRequestSvc: PrService,
    private PurchaseRequestLineItemSvc: PrliService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  GetPurchaseRequestById(id: string): void {
    this.PurchaseRequestSvc.Get(id).subscribe(pr => {
      this.pr = pr;
      this.prli = pr.PurchaseRequestLineItems; // just by convenience we are assigning it to a local variable for access.
      console.log(pr);
    });
  }

  GetPurchaseRequestLineItemsByRequestId(id: string): void {
    this.PurchaseRequestLineItemSvc.GetByProductId(id).subscribe(prli => {
      this.prli = prli;
      console.log(prli);
    });
  }

  remove(prli: PurchaseRequestLineItem): void {
    this.PurchaseRequestLineItemSvc.Remove(prli).subscribe(res => {
      console.log(res);
      const id = this.pr.Id;
      //this.pr = null;
      //this.prli = null;
      this.GetPurchaseRequestById(String(id));
    });
  }

  ResetPRLIList() {
    this.prli = null;
    this.GetPurchaseRequestLineItemsByRequestId(String(this.pr.Id));
  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.GetPurchaseRequestById(id);
    });
  }

}
