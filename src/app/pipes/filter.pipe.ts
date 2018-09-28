import { Pipe, PipeTransform } from "@angular/core";
import { Info } from "../model/interface";

@Pipe(
    { name: 'filterInfo'}
)
export class FilterPipe implements PipeTransform {
    transform(allInfo: Info[], type: string) {
        if(type==="all") {
           return allInfo 
        } else {
        return allInfo.filter(info => info.type  === type );
    }
  }
}