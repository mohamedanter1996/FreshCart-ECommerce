import { WishListService } from './../wish-list.service';
import { Product, productCategories } from './../product';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';

import { MessageService } from 'primeng/api';
import { LoaderService } from '../loader.service';
declare var anime: any;     



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    providers: [MessageService]
})
export class HomeComponent implements OnInit,AfterViewInit{
constructor(private _productsService:ProductsService,private _router:Router,private _cartService:CartService,private _wishListService:WishListService,private messageService: MessageService,public _loaderService:LoaderService){}

wishListIdsList:string[]=[];
wishListMessage:string="";
productSearch:string="";
products:Product[]=[];
productCategories:productCategories[]=[];
ngAfterViewInit(): void {
      const textWrapper:any = document.querySelector('.an-1');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.an-1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el:any, i:any) => 70*i
  }).add({
    targets: '.an-1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

}
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
   
    this._productsService.getProductCategories().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.productCategories=response.data;
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
      console.log(response.numOfCartItems);
      this._cartService.cartProductQuantity.next(response.numOfCartItems);
      localStorage.setItem("numOfCartItems",response.numOfCartItems);
      this._cartService.cartId.next(response.data._id);
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

customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
   autoplayHoverPause:true,
   autoplayTimeout:3000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


}
