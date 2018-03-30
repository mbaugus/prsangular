import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { PurchaseRequest } from '../../models/purchaserequest';
import { PrService } from '../../services/pr.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrliService } from '../../services/prli.service';
import { ProductService } from '../../services/product.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { Product } from '../../models/product';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})

export class PrDetailComponent implements OnInit {
  pr: PurchaseRequest;
  NewPurchaseRequest: PurchaseRequestLineItem;
  ProductErrorString = '';
  addingLine = false;
  NewProduct: Product;
  Products: Product[];
  prli: {};

   myControl: FormControl = new FormControl();
   filteredProducts: Observable<Product[]>;

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

  filter(val: Product): Product[] {
    return this.Products.filter(product =>
      product.Name.toLowerCase().indexOf(val.Name.toLowerCase()) === 0);
  }


  showAddLine(): void {
    this.NewPurchaseRequest = new PurchaseRequestLineItem(0, this.pr.Id, 0, 0, true, '', '', 0);
    console.log('Add line');
    this.addingLine = true;
    this.ProductSvc.List().subscribe(products => {
      this.Products = products;
      this.filteredProducts = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    });
  }
  hideLineAdd(): void {
    this.Products = [];
    this.addingLine = false;
  }

  CancelCreateProduct(): void {
    this.hideLineAdd();
  }
   CreateProduct(): void {
    this.hideLineAdd();
   }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.GetPurchaseRequestById(id);
    });
  }

}
