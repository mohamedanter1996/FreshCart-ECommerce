import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productIdType=new BehaviorSubject("")
  constructor(private _httpClient:HttpClient) { }
  getAllHomeProduct():Observable<any>
  {
   return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  getSpecificProduct(productId:string):Observable<any>
  {
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`);
  }

   getProductCategories():Observable<any>
  {
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

     getAllBrands():Observable<any>
  {
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }
}
