import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private _productsService:ProductsService,private _router:Router){}
products:Product[]=[];
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
