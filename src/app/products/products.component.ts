import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { MessageService } from 'primeng/api';
import { WishListService } from '../wish-list.service';
import { LoaderService } from '../loader.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
   providers: [MessageService]
})
export class ProductsComponent implements OnInit {
  wishListIdsList:string[]=[];
  products:Product[]=[];
  productSearch:string="";
  wishListMessage:string="";
constructor(private _productsService:ProductsService,private _cartService:CartService ,private _wishListService:WishListService,private messageService: MessageService ,public _loaderService:LoaderService){}
ngOnInit(): void {
    this.wishListIdsList=JSON.parse(localStorage.getItem("wishListIdsList")!);
    this._productsService.getAllHomeProduct().subscribe({
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
      console.log(response)
      this._cartService.cartProductQuantity.next(response.numOfCartItems);
      localStorage.setItem("numOfCartItems",response.numOfCartItems)
    },
    error:(error)=>{
      console.log(error);
    }
  })
}

addProductToWishList(productId:string){
this._wishListService.addProductToWishList(productId).subscribe({
  next:(response)=>{
    console.log(response);
this.wishListMessage=response.message;
console.log(response.data);
this.wishListIdsList=response.data;
localStorage.setItem("wishListIdsList",JSON.stringify(this.wishListIdsList));



  },
  error:(error)=>{
    console.log(error);
  }
})
}

checkIdExestInWishList(productId:string):boolean{
 return this.wishListIdsList?.filter((wishListId:any)=>{return wishListId==productId}).length>0?true:false;
}

show(productId:string,index:number) {
  this.addProductToWishList(productId)

        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.wishListMessage==""? `Product added successfully to your wishlist`:this.wishListMessage });
    }
}
