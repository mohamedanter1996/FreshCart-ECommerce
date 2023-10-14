import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { cartProduct,Product } from '../product';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  CartOwner:string="";
  cartId:string="";
  totalPrice:number=0;
  totalNumberOfItems:number=0;
  cartProducts:cartProduct[]=[];
constructor(private _cartService:CartService ,public _loaderService:LoaderService){}
ngOnInit(): void {
    this._cartService.getUserLoggedCart().subscribe({
      next:(response)=>{
        console.log(response);
        this.cartId=response.data._id;
        // this._cartService.cartId.subscribe({
        //   next:(value)=>{
        //     console.log(value,"behaviuor");
        //     this.cartId=value;
        //   }
        // })
        this.CartOwner=response.data.cartOwner;
        this._cartService.CartOwner.next(response.data.cartOwner);
        localStorage.setItem("cartOwner",response.data.cartOwner);
        console.log(response.data._id);
        
        this.totalPrice=response.data.totalCartPrice;
        this.totalNumberOfItems=response.numOfCartItems;
        this.cartProducts=response.data.products;
this._cartService.cartProductQuantity.next(this.totalNumberOfItems);
      },
      error:(error)=>{
        console.log(error);
      }
    })
}
updateCartProductQuantity(productId:string,newProductCartQuantity:number){
this._cartService.updateProductCartQuantity(productId,newProductCartQuantity).subscribe({
  next:(response)=>{
    console.log(response);
   if(newProductCartQuantity==0){
  
    this.removeSpecificCartProduct(productId);
   }
   else{
 this.totalPrice=response.data.totalCartPrice;
        this.totalNumberOfItems=response.numOfCartItems;
        this.cartProducts=response.data.products;
        this._cartService.cartProductQuantity.next(this.totalNumberOfItems);
   }
     
  },
  error:(error)=>{
    console.log(error);
  }
})
}

removeSpecificCartProduct(productId:string){
this._cartService.removeSpecificCartProduct(productId).subscribe({
  next:(response)=>{
    console.log(response)
     this.totalPrice=response.data.totalCartPrice;
        this.totalNumberOfItems=response.numOfCartItems;
        this.cartProducts=response.data.products;
        this._cartService.cartProductQuantity.next(this.totalNumberOfItems);
  },
  error:(error)=>{
    console.log(error);
  }
})
}

clearUserCart(){
  this._cartService.clearUserCart().subscribe({
    next:(response)=>{
      console.log(response);
      this.totalPrice=0;
        this.totalNumberOfItems=0;
        this.cartProducts=[];
        this._cartService.cartProductQuantity.next(this.totalNumberOfItems);
        localStorage.setItem("numOfCartItems","0");

    },
    error:(error)=>{
      console.log(error);
    }
  })
}
}
