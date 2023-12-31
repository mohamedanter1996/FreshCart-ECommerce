import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { successLogInGuard } from './success-log-in.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsOfCategoyDetailsComponent } from './products-of-categoy-details/products-of-categoy-details.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { AllordersComponent } from './allorders/allorders.component';


const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:"Home",canActivate:[successLogInGuard],component:HomeComponent,title:"Home"},
  {path:"cart",canActivate:[successLogInGuard],component:CartComponent,title:"cart"},
  {path:"check-out/:id",canActivate:[successLogInGuard],component:CheckOutFormComponent,title:"check-out"},
  {path:"wishList",canActivate:[successLogInGuard],component:WishListComponent,title:"wishList"},
  {path:"products",canActivate:[successLogInGuard],component:ProductsComponent,title:"products"},
  {path:"categories",canActivate:[successLogInGuard],component:CategoriesComponent,title:"categories"},
  {path:"brands",canActivate:[successLogInGuard],component:BrandsComponent,title:"brands"},
  {path:"productDetails/:id",canActivate:[successLogInGuard],component:ProductDetailsComponent,title:"productDetails"},
  {path:"productsOfCategory/:id",canActivate:[successLogInGuard],component:ProductsOfCategoyDetailsComponent,title:"products"},
  {path:"paymentMethods/:id",canActivate:[successLogInGuard],component:PaymentMethodsComponent,title:"paymentMethods"},
  {path:"allorders",canActivate:[successLogInGuard],component:AllordersComponent,title:"allorders"},
  {path:"register",component:SignUpComponent,title:"register"},
  {path:"logIn",component:SignInComponent,title:"logIn"},
  {path:"forget-Password",component:ForgetPasswordComponent,title:"forget-Password"},
  {path:"verify-code",component:VerifyCodeComponent,title:"verify-code"},
  {path:"reset-password",component:ResetPasswordComponent,title:"reset-password"},
  

  

  {path:"**",component:NotFoundComponent,title:"404 Error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
