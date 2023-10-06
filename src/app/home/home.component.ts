import { Product, productCategories } from './../product';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var anime: any;     



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit{
constructor(private _productsService:ProductsService,private _router:Router){}
productSearch:string=""
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
        items: 6
      },
      400: {
        items: 6
      },
      740: {
        items: 6
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


}
