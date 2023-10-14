import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {  userAddress } from './product';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
headers:any={
  token:localStorage.getItem("token")
}
userAddressId=new BehaviorSubject("");
  constructor(private _httpClient:HttpClient) { }
  addUserAddress(AddressForm:userAddress):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/addresses`,{
      name:AddressForm.name,
      details:AddressForm.details,
      phone:AddressForm.phone,
      city:AddressForm.city

    },{
headers:this.headers
    })
  }

  getSpecificUserAddress(userAddressId:string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/addresses/${userAddressId}`,{
      headers:this.headers
    })
  }
}
