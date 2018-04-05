import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor: Vendor;
  pagetitle = 'Edit vendor';
  constructor(
    private VendorSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
    getVendorById(id) {
      this.VendorSvc.Get(id).
      subscribe(vendor => {
        this.vendor = vendor;
        console.log(vendor);
      });
    }
  change(): void {
    this.VendorSvc.Change(this.vendor).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/vendors/list');
    });
  }
  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.getVendorById(id);
    });
  }
}
