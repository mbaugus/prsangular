import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ProductSvc: ProductService
  ) { }
  remove(): void {
    this.ProductSvc.Remove(this.product)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/products/list');
    });
  }

  getProductById(id) {
    this.ProductSvc.Get(id).
    subscribe(product => {
      this.product = product;
      console.log(product);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.getProductById(id);
    });
  }

}
