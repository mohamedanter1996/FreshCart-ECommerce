import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogIn:boolean=false;
  productsCartQuantity:number=0;
constructor(private _authenticationService:AuthenticationService,private _router:Router,private _cartService:CartService,public _loaderService:LoaderService){}
ngOnInit(): void {
    this._authenticationService.userData.subscribe({
      next:(userDataValue)=>{
if(userDataValue==null){
  this.isLogIn=false;
}
else{
  this.isLogIn=true;
}
      }
    })
    this._cartService.cartProductQuantity.subscribe({
      next:(value)=>{
this.productsCartQuantity=value;
      }
    })
}
logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("cartOwner");
  localStorage.removeItem("numOfCartItems");
  localStorage.removeItem("productIdType");
  localStorage.removeItem("userAddressId");
  localStorage.removeItem("wishListIdsList");
  this._authenticationService.userData.next(null);
this._router.navigate(["/logIn"]);
}
}
