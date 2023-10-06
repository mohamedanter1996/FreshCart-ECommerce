import { Product } from './product';
import { Pipe, PipeTransform, inject } from '@angular/core';
import { ProductsService } from './products.service';


@Pipe({
  name: 'productsOfCategory'
})
export class ProductsOfCategoryPipe implements PipeTransform {
constructor(private _productsService:ProductsService){}
  transform(products:Product[], productsOfCategory:string): Product[] {
    return products.filter((product)=>{
      console.log(product.category._id,productsOfCategory);
this._productsService.productIdType.subscribe({
  next:(value)=>{
console.log(value);
localStorage.setItem("productIdType",value);
  }
})
   if(localStorage.getItem("productIdType")=="category"){
  return product.category._id===productsOfCategory;
}
else if(localStorage.getItem("productIdType")=="brand"){
return product.brand._id===productsOfCategory
}  
else{
  return product.category._id===productsOfCategory;
}
    });
  
 

  }

}
