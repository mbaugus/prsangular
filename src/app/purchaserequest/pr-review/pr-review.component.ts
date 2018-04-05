import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';

@Component({
  selector: 'app-pr-review',
  templateUrl: './pr-review.component.html',
  styleUrls: ['./pr-review.component.css']
})
export class PrReviewComponent implements OnInit {
  pagetitle = 'Request Approval';
  pr: PurchaseRequest;
  prli: {};
  denyReasonDisabled = false;
  reasonForDenital = '';

  constructor(
    private PurchaseRequestSvc: PrService,
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

  handleChange(event: any, element: string): void {
     const target: any = event.target;
    if ( target.checked && element === 'deny') {
      this.denyReasonDisabled = false;
    } else {
      this.denyReasonDisabled = true;
    }
  }

  submitReview(): void {
    if (this.denyReasonDisabled === true) {
      // approved
      this.pr.Status = 'APPROVED';
    } else {
      // not approved
      this.pr.ReasonForRejection = this.reasonForDenital;
      this.pr.Status = 'REJECTED';
    }
    console.log(this.reasonForDenital);
    this.PurchaseRequestSvc.Change(this.pr).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/purchaserequests/reviewlist');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.GetPurchaseRequestById(id);
    });
  }

}
