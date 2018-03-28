import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './support/home/home.component';
import { AboutComponent} from './support/about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { PrCreateComponent } from './purchaserequest/pr-create/pr-create.component';
import { PrEditComponent } from './purchaserequest/pr-edit/pr-edit.component';
import { PrDetailComponent } from './purchaserequest/pr-detail/pr-detail.component';
import { PrListComponent } from './purchaserequest/pr-list/pr-list.component';
import { PurchaseRequestLineItem } from './models/purchaserequestlineitem';
import { PrliEditComponent } from './purchaserequest-lineitem/prli-edit/prli-edit.component';
import { PrEditLinesComponent} from './purchaserequest/pr-editlines/pr-editlines.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'users/list', component: UserListComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},
  { path: 'vendors/list', component: VendorListComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'products/list', component: ProductListComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'purchaserequests/list', component: PrListComponent },
  { path: 'purchaserequests/detail/:id', component: PrDetailComponent},
  { path: 'purchaserequests/edit/:id', component: PrEditComponent},
  { path: 'purchaserequests/create', component: PrCreateComponent },
  { path: 'purchaserequests/editlineitem/:id', component: PrliEditComponent},
  { path: 'purchaserequests/editlines/:id', component: PrEditLinesComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
