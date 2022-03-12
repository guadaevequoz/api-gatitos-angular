import { Injectable } from '@angular/core';

@Injectable()
export class CatService {
  cat: string = '';
  catSrc: string = '#';

  async get(message: string) {
    if (message.length > 0) {
      return `https://cataas.com/cat/says/${message}`;
    }
  }

  clear() {
    this.cat = '';
  }
}
