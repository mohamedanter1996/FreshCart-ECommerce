import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DecrementTitlePipe } from './decrement-title.pipe'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductSearchPipe } from './product-search.pipe';
import { ProductsOfCategoyDetailsComponent } from './products-of-categoy-details/products-of-categoy-details.component';
import { ProductsOfCategoryPipe } from './products-of-category.pipe';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { AllordersComponent } from './allorders/allorders.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IntersiptorService } from './intersiptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    ProductDetailsComponent,
    CheckOutFormComponent,
    OnlinePaymentComponent,
    CashOnDeliveryComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    WishListComponent,
    ForgetPasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    DecrementTitlePipe,
    ProductSearchPipe,
    ProductsOfCategoyDetailsComponent,
    ProductsOfCategoryPipe,
    PaymentMethodsComponent,
    AllordersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastModule,
      MatProgressSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:IntersiptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
