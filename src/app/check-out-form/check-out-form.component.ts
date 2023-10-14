import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAddressService } from '../user-address.service';
import { userAddress } from '../product';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit{
  userAddressId:string="";
  userAddressList:userAddress[]=[];
  cartId:string="";
  constructor(private _activatedRoute:ActivatedRoute,private _userAddressService:UserAddressService,private _router:Router ,public _loaderService:LoaderService){}
ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param)=>{
      console.log(param.get("id"));
      this.cartId=param.get("id")!;
    })
}
checkOutForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
  details:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.pattern(/^(\+2){0,1}01[0125][0-9]{8}$/),Validators.required]),
  city:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][A-Za-z]{3,20}$/)])

})

handleCheckOutForm(checkOutForm:FormGroup){
  console.log(checkOutForm.value);
this._userAddressService.addUserAddress(checkOutForm.value).subscribe({
  next:(response)=>{
    console.log(response.data);
this.userAddressList=response.data;
console.log(this.userAddressList[this.userAddressList.length-1]._id);
this.userAddressId=this.userAddressList[this.userAddressList.length-1]._id!;
this._userAddressService.userAddressId.next(this.userAddressId);
localStorage.setItem("userAddressId",this.userAddressList[this.userAddressList.length-1]._id!);
if(this.userAddressId.length>0){
this._router.navigate(['/paymentMethods',this.cartId]);
}


  },
  error:(error)=>{
    console.log(error);
  }
})
}
}
