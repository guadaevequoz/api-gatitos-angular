import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  say: string = '';
  toSay: string = '';

  onSay(message: string) {
    this.toSay = message;
  }
}
