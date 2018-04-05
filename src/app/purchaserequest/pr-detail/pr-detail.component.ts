import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrliService } from '../../services/prli.service';
import { ProductService } from '../../services/product.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { Product } from '../../models/product';


@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})

export class PrDetailComponent implements OnInit {
  pr: PurchaseRequest;
  NewPurchaseRequest: PurchaseRequestLineItem;
  NewPurchaseRequestProduct: Product;
  ProductErrorString = '';
  addingLine = false;

  Products: Product[];
  prli: {};

  constructor(
    private PurchaseRequestSvc: PrService,
    private PurchaseRequestLineItemSvc: PrliService,
    private ProductSvc: ProductService,
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

  DeletePurchaseRequest(pr: PurchaseRequest): void {
    this.PurchaseRequestSvc.Remove(pr).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/purchaserequests/list');
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
      this.GetPurchaseRequestById(String(id));
    });
  }

  ResetPRLIList(): void {
    this.prli = null;
    this.GetPurchaseRequestLineItemsByRequestId(String(this.pr.Id));
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  showAddLine(): void {
    this.NewPurchaseRequest = new PurchaseRequestLineItem(0, this.pr.Id, 0, 1, true, '', '', 0);
    console.log('Add line');
    this.addingLine = true;
    this.ProductSvc.List().subscribe(products => {
      this.Products = products;
    });
  }
  hideLineAdd(): void {
    this.Products = [];
    this.NewPurchaseRequestProduct = null;
    this.addingLine = false;
  }

  CancelCreateProduct(): void {
    this.hideLineAdd();
  }
   CreateProduct(): void {
     this.NewPurchaseRequest.ProductID = this.NewPurchaseRequestProduct.Id;
     this.NewPurchaseRequest.PurchaseRequestId = this.pr.Id;
     console.log('prli', this.NewPurchaseRequest);
     this.PurchaseRequestLineItemSvc.Create(this.NewPurchaseRequest).subscribe(resp => {
        console.log(resp);
        this.hideLineAdd();
        this.GetPurchaseRequestById(String(this.pr.Id));
    });
   }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.GetPurchaseRequestById(id);
    });
  }

}
