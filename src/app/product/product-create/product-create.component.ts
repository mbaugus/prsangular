import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Vendor } from '../../models/vendor';
import { ProductService } from '../../services/product.service';
import { VendorService } from '../../services/vendor.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product(0, 1, '', '', 0.0, '', '', true, '', '', null, null);
  vendors: Vendor[];
  uploadError = '';
  constructor(
    private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private FileSvc: FileService
  ) { }

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
    this.ProductSvc.Create(this.product).subscribe(res =>{
      console.log(res);
      this.router.navigateByUrl('/products/list');
    });
  }

  ngOnInit() {
    this.getVendors();
  }

}
