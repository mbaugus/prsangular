import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor;
  pagetitle = 'Vendor detail';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private VendorSvc: VendorService
  ) { }

remove(): void {
  this.VendorSvc.Remove(this.vendor)
  .subscribe(res => {
    console.log(res);
    this.router.navigateByUrl('/vendors/list');
  });
}

getVendorById(id) {
  this.VendorSvc.Get(id).
  subscribe(vendor => {
    this.vendor = vendor;
    console.log(vendor);
  });
}

ngOnInit() {
  this.route.params.subscribe(parms => {
  const id = parms['id'];
  this.getVendorById(id);
    });
  }
}
