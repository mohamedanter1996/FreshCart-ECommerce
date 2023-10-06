import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { productCategories } from '../product';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories:productCategories[]=[];
constructor(private _productsService:ProductsService){}
ngOnInit(): void {
  this._productsService.productIdType.next("category");
    this._productsService.getProductCategories().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.categories=response.data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
}
}
