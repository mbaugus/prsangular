import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Vendor } from '../../models/vendor';
import { ProductService } from '../../services/product.service';
import { VendorService } from '../../services/vendor.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../../services/file.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product(0, 1, '', '', 0.0, '', '', true, '', '', null, null);
  vendors: Vendor[];
  uploadError = '';
  pagetitle = 'New product';
  submitted = false;
  nfile: any;
  form: FormGroup;
  valid = true;

  constructor(
    private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private FileSvc: FileService
  ) { }

  fileChange(event): void {
    this.nfile = event.srcElement;
   if (!this.nfile) {
     this.valid = false;
     return;
   } else {
     this.valid = true;
   }
 }

  getVendors(): void {
    this.VendorSvc.List().subscribe(vendors => {
      this.vendors = vendors;
      console.log(this.vendors);
    });
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.submitted = true;
    this.ProductSvc.Create(this.product).subscribe(res => {
      console.log(res);
      if (res['Status']) {
        return;
      }
      if ( this.nfile ) {
        const id = res['Id'];
        // upload image now if its got one.
        const input: FormData = new FormData();
        input.append('file', this.nfile.files[0]);
        input.append('productIDToAttachTo', id);

        this.FileSvc.UploadPicture(input).subscribe(res2 => {
          this.nfile.value = '';
          console.log(res2);
          this.submitted = false;
          this.router.navigateByUrl('/products/list');
        });
      }
    });
  }

  ngOnInit() {
    this.getVendors();
  }

}
