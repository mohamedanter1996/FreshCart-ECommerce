import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { orderData } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
  CartOwner:string="";
  ordersList:orderData[]=[];
  constructor(private _cartService:CartService,private _orderService:OrderService ,public _loaderService:LoaderService){}
ngOnInit(): void {
    this._cartService.CartOwner.subscribe({
      next:(value)=>{
        this.CartOwner=value;
        console.log(this.CartOwner);
this._orderService.getUserOrders(this.CartOwner.length==0?localStorage.getItem("cartOwner")!:this.CartOwner).subscribe({
  next:(response)=>{
    console.log(response);

    this.ordersList=response;


  },
  error:(error)=>{
    console.log(error);
  }
})
      }
    })


}


customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
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
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
