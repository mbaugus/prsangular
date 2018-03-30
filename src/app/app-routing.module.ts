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

import { AuthGuard } from './support/authguard';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login',  component: LoginComponent },

  { path: 'users/detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'users/list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'users/create', component: UserCreateComponent, canActivate: [AuthGuard] },

  { path: 'vendors/detail/:id', component: VendorDetailComponent, canActivate: [AuthGuard] },
  { path: 'vendors/edit/:id', component: VendorEditComponent, canActivate: [AuthGuard] },
  { path: 'vendors/list', component: VendorListComponent, canActivate: [AuthGuard] },
  { path: 'vendors/create', component: VendorCreateComponent, canActivate: [AuthGuard] },

  { path: 'products/list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/create', component: ProductCreateComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: 'products/detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },

  { path: 'purchaserequests/list', component: PrListComponent, canActivate: [AuthGuard]  },
  { path: 'purchaserequests/detail/:id', component: PrDetailComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequests/edit/:id', component: PrEditComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequests/create', component: PrCreateComponent, canActivate: [AuthGuard]  },
  { path: 'purchaserequests/editlineitem/:id', component: PrliEditComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequests/editlines/:id', component: PrEditLinesComponent, canActivate: [AuthGuard] },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
