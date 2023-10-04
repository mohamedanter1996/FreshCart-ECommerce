import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }
  getAllHomeProduct():Observable<any>
  {
   return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  getSpecificProduct(productId:string):Observable<any>
  {
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`);
  }
}
