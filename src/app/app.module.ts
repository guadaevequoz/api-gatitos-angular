import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatComponent } from './cat.component';
import { CatService } from './cat.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CatComponent],
  providers: [CatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
