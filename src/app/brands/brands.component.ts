import { Product,brand } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
brands:brand[]=[];
constructor(private _productsService:ProductsService){}
ngOnInit(): void {
  this._productsService.productIdType.next("brand");
    this._productsService.getAllBrands().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.brands=response.data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
}
}
