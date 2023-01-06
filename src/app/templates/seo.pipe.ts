import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seo'
})
export class SeoPipe implements PipeTransform {

  constructor(){}
  
  transform(seo: string): string {
    return seo.replace(/ /g,"-");
  }

}
