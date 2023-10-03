import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decrementTitle'
})
export class DecrementTitlePipe implements PipeTransform {

  transform(title: string): string {
title.split(" ").slice(0,2).join(" ")
    return title.split(" ").slice(0,2).join(" ");
  }

}
