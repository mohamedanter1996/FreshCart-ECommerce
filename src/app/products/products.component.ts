import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  productSearch:string=""
constructor(private _productsService:ProductsService){}
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
}
}
