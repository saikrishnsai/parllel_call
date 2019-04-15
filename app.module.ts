import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { mycountries } from './services/my.countries';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [mycountries],
  bootstrap: [AppComponent]
})
export class AppModule { }
