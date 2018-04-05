import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrliService } from '../../services/prli.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';

@Component({
  selector: 'app-pr-editlines',
  templateUrl: './pr-editlines.component.html',
  styleUrls: ['./pr-editlines.component.css']
})
export class PrEditLinesComponent implements OnInit {
  pagetitle = 'Edit Purchase Request items';
  pr: PurchaseRequest;
  prli: {};
  constructor(
    private PurchaseRequestSvc: PrService,
    private PurchaseRequestLineItemSvc: PrliService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  Update(prli: PurchaseRequestLineItem): void {
    console.log(prli);
    this.PurchaseRequestLineItemSvc.Change(prli).subscribe(resp => {
      this.GetPurchaseRequestById(String(this.pr.Id));
    });
  }

  Remove(prli: PurchaseRequestLineItem): void {
    this.PurchaseRequestLineItemSvc.Remove(prli).subscribe(resp => {
      this.GetPurchaseRequestById(String(this.pr.Id));
    });
  }

  Add(prli: PurchaseRequestLineItem): void {
    this.PurchaseRequestLineItemSvc.Create(prli).subscribe(resp => {
      this.GetPurchaseRequestById(String(this.pr.Id));
    });
  }

  GetPurchaseRequestById(id: string): void {
    this.PurchaseRequestSvc.Get(id).subscribe(pr => {
      this.pr = pr;
      this.prli = pr.PurchaseRequestLineItems; // just by convenience we are assigning it to a local variable for access.
      console.log(pr);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.GetPurchaseRequestById(id);
    });
  }

}
