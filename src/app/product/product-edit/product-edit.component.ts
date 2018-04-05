import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Vendor } from '../../models/vendor';
import { ProductService } from '../../services/product.service';
import { VendorService } from '../../services/vendor.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../../services/file.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {
  pagetitle = 'Edit Product';
  form: FormGroup;
  nfile: any;
  product: Product;
  vendors: Vendor[];
  selectedVendor: Vendor;
  loading = false;
  valid = false;
  uploadError = '';

  constructor(
    private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private FileSvc: FileService
  ) { }

  getProductById(id): void {
    this.ProductSvc.Get(id).subscribe(product => {
      this.product = product;
      this.selectedVendor = this.product.Vendor;
      console.log(product);
    });
  }

  getVendors(): void {
    this.VendorSvc.List().subscribe(vendors => {
      this.vendors = vendors;
      console.log(this.vendors);
    });
  }


  fileChange(event): void {
     this.nfile = event.srcElement;
    if (!this.nfile) {
      this.valid = false;
      return;
    } else {
      this.valid = true;
    }
  }

  change(): void {
    this.ProductSvc.Change(this.product).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/products/list');
    });
  }

  uploadimage(): void {
    this.loading = true;
    const input: FormData = new FormData();
    input.append('file', this.nfile.files[0]);
    input.append('productIDToAttachTo', String(this.product.Id));

    this.FileSvc.UploadPicture(input).subscribe(res => {
      this.nfile.value = '';
      console.log(res);
      this.loading = false;
      this.valid = false;
      this.getProductById(this.product.Id);
    });
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.getVendors();
      this.getProductById(id);
    });
  }
}
