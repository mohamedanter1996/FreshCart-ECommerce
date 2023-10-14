import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  products:Product[]=[];
  constructor(private _wishListService:WishListService ,private _cartService:CartService,public _loaderService:LoaderService){}
ngOnInit(): void {
    this._wishListService.getLoggedUserWishlist().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.products=response.data;

      },
      error:(error)=>{
        console.log(error);
      }
    })
}

addProductToCart(productId:string){
  this._cartService.addProductToCart(productId).subscribe({
    next:(response)=>{
      console.log(response);
      this._cartService.cartProductQuantity.next(response.numOfCartItems);
      localStorage.setItem("numOfCartItems",response.numOfCartItems);
    },
    error:(error)=>{
      console.log(error);
    }
  })
}
removeSpecificProductFromWishList(productId:string){
  this._wishListService.idOfProduct.next(productId);
  this._wishListService.removeSpecificProductFromWishList(productId).subscribe({
    next:(response)=>{
      console.log(response.data);
      localStorage.setItem("wishListIdsList",JSON.stringify(response.data));
      this._wishListService.getLoggedUserWishlist().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.products=response.data;

      },
      error:(error)=>{
        console.log(error);
      }
    })
    },
    error:(error)=>{
      console.log(error);
    }
  })
}
}
