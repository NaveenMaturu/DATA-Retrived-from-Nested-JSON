import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MdCardModule} from '@angular/material';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
