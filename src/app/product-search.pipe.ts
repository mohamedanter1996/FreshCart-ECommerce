import { productCategories,Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(allProducts:Product[], productSearch:string): Product[] {
    return allProducts.filter((product)=>{return product.title.toLowerCase().includes(productSearch.toLowerCase())});
  }

}
