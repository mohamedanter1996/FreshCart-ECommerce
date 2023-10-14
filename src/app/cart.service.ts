import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  CartOwner=new BehaviorSubject("");
  cartId:BehaviorSubject<string>=new BehaviorSubject("");
  cartProductQuantity=new BehaviorSubject(Number(localStorage.getItem("numOfCartItems")));
headers:any={
  token:localStorage.getItem("token")
}
  constructor(private _httpClient:HttpClient) { }
  addProductToCart(productId:string):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
productId:productId
    },{
      headers:this.headers
    })
  }
  getUserLoggedCart():Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:this.headers
    })
  }
  updateProductCartQuantity(productId:string,newProductCartQuantity:number):Observable<any>{
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
      count:newProductCartQuantity
    },{
      headers:this.headers
    })
  }
  removeSpecificCartProduct(productId:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
      headers:this.headers
    })
  }
  clearUserCart():Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:this.headers
    })
  }
}
