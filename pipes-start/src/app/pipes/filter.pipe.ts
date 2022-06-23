import { Pipe, PipeTransform } from '@angular/core';
import { __asyncValues } from 'tslib';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter:string, prop:string): any {
    if(value.length===0 || filter===''){
      return value;
    }
    const returnArray =[];
    for(const v of value){
      console.log(v);
      if(v[prop].startsWith(filter)){
        returnArray.push(v);
      }
      /*
      if(v[prop]===filter){
        returnArray.push(v);
      }
      */
    }
    return returnArray;
  }

}
