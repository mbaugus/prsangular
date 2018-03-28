import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ImageProductComponent} from '../../support/image-product/image-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  @Input() IsChecked = false;

  products: Product[] = [];
  pagetitle = 'Product List';
  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
    this.ProductSvc.List().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

}
