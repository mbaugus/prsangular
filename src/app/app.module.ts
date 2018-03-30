import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// routing
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './support/authguard';
import { JwtInterceptor } from './support/jwt-interceptor';

// services
import { UserService } from './services/user.service';
import { VendorService } from './services/vendor.service';
import { ProductService } from './services/product.service';
import { FileService } from './services/file.service';
import { PrService } from './services/pr.service';
import { PrliService } from './services/prli.service';
import { SystemService } from './services/system.service';

// base components
import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';
// support components
import { MenuComponent } from './support/menu/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item/menu-item.component';
import { ModalComponent } from './support/modal/modal.component';
import { ImageProductComponent } from './support/image-product/image-product.component';
// user components
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
// vendor components
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
// product components
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { LoaderImageComponent } from './support/loader-image/loader-image.component';
// purchase request components
import { PrCreateComponent } from './purchaserequest/pr-create/pr-create.component';
import { PrDetailComponent } from './purchaserequest/pr-detail/pr-detail.component';
import { PrEditComponent } from './purchaserequest/pr-edit/pr-edit.component';
import { PrListComponent } from './purchaserequest/pr-list/pr-list.component';
// Purchase Request Line Item component
import { PrliCreateComponent } from './purchaserequest-lineitem/prli-create/prli-create.component';
import { PrliDetailComponent } from './purchaserequest-lineitem/prli-detail/prli-detail.component';
import { PrliEditComponent } from './purchaserequest-lineitem/prli-edit/prli-edit.component';
import { PrliListComponent } from './purchaserequest-lineitem/prli-list/prli-list.component';
import { PrEditLinesComponent } from './purchaserequest/pr-editlines/pr-editlines.component';
import { LoginComponent } from './login/login/login.component';

// authentication headers on each request



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    MenuItemComponent,
    ModalComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    VendorCreateComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ImageProductComponent,
    LoaderImageComponent,
    PrCreateComponent,
    PrDetailComponent,
    PrEditComponent,
    PrListComponent,
    PrliCreateComponent,
    PrliDetailComponent,
    PrliEditComponent,
    PrliListComponent,
    PrEditLinesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    FileService,
    PrService,
    PrliService,
    SystemService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
