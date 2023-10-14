import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userAddress } from './product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
headers:any={
  token:localStorage.getItem("token")
}
  constructor(private _httpClient:HttpClient) { }
  createCashOrder(shippingAddress:userAddress,userCartId:string):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${userCartId}`,{
      details:shippingAddress.details,
      phone:shippingAddress.phone,
      city:shippingAddress.city
    },{
      headers:this.headers
    })
  }

   checkOutSession(shippingAddress:userAddress,userCartId:string):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${userCartId}?url=http://localhost:4200`,{
      details:shippingAddress.details,
      phone:shippingAddress.phone,
      city:shippingAddress.city
    },{
      headers:this.headers
    })
   
  }
 getUserOrders(userId:String):Observable<any>{
  return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,{
    headers:this.headers
  })
 }

}
