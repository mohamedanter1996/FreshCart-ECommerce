import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
headers:any={
  token:localStorage.getItem("token")
}

idOfProduct=new BehaviorSubject("");
  constructor(private _httpClient:HttpClient) { }
  addProductToWishList(productId:string):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
      productId:productId
    },{
      headers:this.headers
    })
   
  }

   getLoggedUserWishlist():Observable<any>{
return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
  headers:this.headers
})
    }

    removeSpecificProductFromWishList(productId:string):Observable<any>{
      return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
        headers:this.headers
      })
    }
}
