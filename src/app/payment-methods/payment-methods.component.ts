
import { Component, OnInit } from '@angular/core';
import { userAddress } from '../product';
import { UserAddressService } from '../user-address.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit{
  userShappingAddress:userAddress={} as userAddress;
  userAddressList:userAddress[]=[];
  userAddressId:string="";
  userCartId:string="";
constructor(private _userAddressService:UserAddressService, private _activatedRoute:ActivatedRoute, private _orderService:OrderService,private _cartService:CartService,private _router:Router,public _loaderService:LoaderService){}
  ngOnInit(): void {
      this._userAddressService.userAddressId.subscribe({
        next:(userAddressIdValue)=>{
this.userAddressId=userAddressIdValue!=""?userAddressIdValue:localStorage.getItem("userAddressId")!;
console.log(this.userAddressId);
        }
      });
      this._activatedRoute.paramMap.subscribe((param)=>{
        this.userCartId=param.get("id")!;
        console.log(this.userCartId)
      })

this._userAddressService.getSpecificUserAddress(this.userAddressId).subscribe({
  next:(response)=>{
    console.log(response.data)
    this.userAddressList=response.data;
    console.log(this.userAddressList.length);
    if(this.userAddressList.length!=undefined){
        this.userShappingAddress.details=this.userAddressList[this.userAddressList.length-1].details;
this.userShappingAddress.phone=this.userAddressList[this.userAddressList.length-1].phone;
this.userShappingAddress.city=this.userAddressList[this.userAddressList.length-1].city;
    }
else{
          this.userShappingAddress.details=response.data.details;
          this.userShappingAddress.phone=response.data.phone;
          this.userShappingAddress.city=response.data.city;
}
console.log(this.userShappingAddress); },
  error:(error)=>{
    console.log(error);
  }
})

  }

  createCashOrder(){

this._orderService.createCashOrder(this.userShappingAddress,this.userCartId).subscribe({
  next:(response)=>{
    console.log(response);
this._cartService.cartProductQuantity.next(0);
localStorage.setItem("numOfCartItems",'0');
this._router.navigate(['/allorders']);

  },
  error:(error)=>{
    console.log(error);
  }

})
  


 
  }

  checkOutSession(){

this._orderService.checkOutSession(this.userShappingAddress,this.userCartId).subscribe({
  next:(response)=>{
    console.log(response);
    console.log(response.session.url);
    window.location.href=response.session.url;
    this._cartService.cartProductQuantity.next(0);
localStorage.setItem("numOfCartItems",'0');
  },
  error:(error)=>{
    console.log(error);
  }
})
}


}
