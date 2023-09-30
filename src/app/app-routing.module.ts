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

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:"Home",component:HomeComponent,title:"Home"},
  {path:"cart",component:CartComponent,title:"cart"},
  {path:"wishList",component:WishListComponent,title:"wishList"},
  {path:"products",component:ProductsComponent,title:"products"},
  {path:"categories",component:CategoriesComponent,title:"categories"},
  {path:"brands",component:BrandsComponent,title:"brands"},
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
