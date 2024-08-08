import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any[],term:string): any[] {


    return data.filter(ele =>ele.first_name.toLowerCase().includes(term.toLocaleLowerCase()) ||
                             ele.last_name.toLowerCase().includes(term.toLocaleLowerCase())  ||
                            `${ele.first_name} ${ele.last_name}`.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
