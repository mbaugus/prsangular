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

import { PrReviewlistComponent } from './purchaserequest/pr-reviewlist/pr-reviewlist.component';
import { PrReviewComponent } from './purchaserequest/pr-review/pr-review.component';

import { AuthGuard } from './support/authguard';
import { LoginComponent } from './login/login/login.component';
import { UserAccountComponent } from './user/user-account/user-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard],
   data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'login',  component: LoginComponent },

  { path: 'users/detail/:id', component: UserDetailComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['admin'] } }  },

  { path: 'users/list', component: UserListComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'users/create', component: UserCreateComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['admin'] } }},

  { path: 'users/account', component: UserAccountComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'vendors/detail/:id', component: VendorDetailComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'vendors/edit/:id', component: VendorEditComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['admin']} } },

  { path: 'vendors/list', component: VendorListComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'vendors/create', component: VendorCreateComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['admin'] } } },

  { path: 'products/list', component: ProductListComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'products/create', component: ProductCreateComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['admin'] } } },

  { path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['admin']} } },

  { path: 'products/detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'purchaserequests/list', component: PrListComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } }  },

  { path: 'purchaserequests/create', component: PrCreateComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin'] } }  },

  { path: 'purchaserequests/reviewlist', component: PrReviewlistComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['admin', 'review'] } } },

  { path: 'purchaserequests/detail/:id', component: PrDetailComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } }},

  { path: 'purchaserequests/edit/:id', component: PrEditComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'purchaserequests/editlineitem/:id', component: PrliEditComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'purchaserequests/editlines/:id', component: PrEditLinesComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'purchaserequests/review/:id', component: PrReviewComponent, canActivate: [AuthGuard],
  data: { permission: {only: ['user', 'admin', 'review'] } } },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { permission: {only: ['user', 'admin', 'review'] } } },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard], data: { permission: {only: ['user', 'admin', 'review'] } } },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
