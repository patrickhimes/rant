import { Pipe, PipeTransform} from '@angular/core';

import { Rant } from './rant';

@Pipe({
  name: 'reverse',
  pure: false
})

export class ReversePipe implements PipeTransform{
  transform(allRants: Rant[]) {
    if(allRants){
      console.log('rants' + allRants);
      return allRants.slice().reverse();
    }
  }
}