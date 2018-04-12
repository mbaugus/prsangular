import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrliService } from '../../services/prli.service';
import { ProductService } from '../../services/product.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { Product } from '../../models/product';


@Component({
  selector: 'app-pr-edit',
  templateUrl: './pr-edit.component.html',
  styleUrls: ['./pr-edit.component.css']
})
export class PrEditComponent implements OnInit {

  pagetitle = 'Edit Purchase Request';
  pr: PurchaseRequest;
  newdate: string;

  constructor(
    private PurchaseRequestSvc: PrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  GetPurchaseRequestById(id: string): void {
    this.PurchaseRequestSvc.Get(id).subscribe(pr => {
      this.pr = pr;
      this.newdate = pr.DateNeeded.slice(0, 10);
      console.log(pr);
      console.log(this.newdate);
    });
  }

  change(): void {
    this.pr.DateNeeded = new Date(this.newdate).toISOString();
    this.PurchaseRequestSvc.Change(this.pr).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('purchaserequests/list');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.GetPurchaseRequestById(id);
    });
  }

  check(): void {
  }

}
