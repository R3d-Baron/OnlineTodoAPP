import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any, searchedData:string): any {
    
    if (searchedData.length >= 1) {
      
      var searchedDataTodo = value.filter((item:any)=>{
        return (item.title.toLowerCase().trim().includes(searchedData.toLocaleLowerCase().trim()));
      });

    } else {
      return value;
    }
    // console.log(`Searched result : ${searchedDataTodo}`);
    return searchedDataTodo;
  }

}
