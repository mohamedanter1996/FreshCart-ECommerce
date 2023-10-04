import { specificProduct } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productId:string|null="";
specificProduct:specificProduct={} as specificProduct
constructor(private _activatedRoute:ActivatedRoute,private _productsService:ProductsService){}
ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param)=>{
      console.log(param.get("id"));
      this.productId=param.get("id");
          this._productsService.getSpecificProduct(this.productId!=null?this.productId:"").subscribe({
next:(response)=>{
  console.log(response);
this.specificProduct={
  images:response.data.images,
  title:response.data.title,
  description:response.data.description,
  ratingsAverage:response.data.ratingsAverage,
  price:response.data.price
}
console.log(this.specificProduct.images);

},
error:(error)=>{
  console.log(error);
}
    })
    })

}

customOptions: OwlOptions = {
    loop: true,
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
}
