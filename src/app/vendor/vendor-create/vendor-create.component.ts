import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', false, true, '', '', 0);
  pagetitle = 'Create Vendor';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private VendorSvc: VendorService
  ) { }

  create() {
    console.log('Create this user', this.vendor);
    this.VendorSvc.Create(this.vendor).subscribe(res => {
      if ( res['Status'] === 'Failure' ) {
        this.error = res['Message'];
      } else {
        console.log(res);
        this.router.navigateByUrl('vendors/list');
      }
    });
  }

  ngOnInit() {}
}

