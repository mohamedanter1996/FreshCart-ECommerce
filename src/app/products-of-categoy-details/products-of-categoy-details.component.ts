import { Product,category } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products-of-categoy-details',
  templateUrl: './products-of-categoy-details.component.html',
  styleUrls: ['./products-of-categoy-details.component.css']
})
export class ProductsOfCategoyDetailsComponent implements OnInit{
products:Product[]=[];  
productId:string|null="";  
constructor(private _productsService:ProductsService,private _activatedRoute:ActivatedRoute){}
ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params)=>{
      this.productId=params.get("id")
    
      console.log(params.get("id"));
      this._productsService.getAllHomeProduct().subscribe({
        next:(response)=>{
          console.log(response.data);
          this.products=response.data;

        },
        error:(error)=>{
          console.log(error);
        }
        
      })
    })
}
}
