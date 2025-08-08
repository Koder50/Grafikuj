import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Komponent } from './komponent';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    Komponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [Komponent]
})
export class AppModule { }
