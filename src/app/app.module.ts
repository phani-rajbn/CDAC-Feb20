import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MathComponent } from './Components/math/math.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import {Product } from "./Classes/product";
import { DetailComponent } from './Components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    ProductListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
