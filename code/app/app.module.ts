import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './appcomponent/app.component';
import { TestComponent }   from './testcomponent/test.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
