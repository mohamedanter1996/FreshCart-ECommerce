import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decrementTitle'
})
export class DecrementTitlePipe implements PipeTransform {

  transform(title: string,productSearch?:string): string {
if(productSearch){
   return title;
}else{
return title.split(" ").slice(0,2).join(" ");
}
    
  }

}
