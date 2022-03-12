import { Component, Input, SimpleChanges } from '@angular/core';
import { CatService } from './cat.service';

@Component({
  selector: 'cat',
  template: ` <p><img src="{{ catSrc }}" /></p> `,
  styles: ['img { max-width: 500px; }'],
})
export class CatComponent {
  @Input() toSay: string;
  catSrc: string = '';

  constructor(private catService: CatService) {}

  ngOnChanges(changes: SimpleChanges) {
    // Es importante google y consultar la docmumentación
    // https://angular.io/api/core/OnChanges
    this.getCat(changes.toSay.currentValue);
  }

  async getCat(message: string) {
    this.catSrc = await this.catService.get(message);
  }
}
