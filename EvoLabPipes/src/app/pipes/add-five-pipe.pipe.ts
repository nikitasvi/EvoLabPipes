import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFive'
})

export class AddFivePipePipe implements PipeTransform {
  transform(value: number): number {
    return value + 5;
  }
}
