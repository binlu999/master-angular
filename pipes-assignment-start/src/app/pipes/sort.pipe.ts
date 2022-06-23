import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:any[], sortBy:string): unknown {
    if(value.length<2){
      return value;
    }

    return value.sort(
      (a,b)=>{
        if(a[sortBy]>b[sortBy])
          return 1;
        else if(a[sortBy]<b[sortBy])
          return -1;
        else
          return 0;
      }
      )
    return null;
  }

}
