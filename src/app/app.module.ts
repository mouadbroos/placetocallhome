import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IncentiveCalculatorComponent } from './incentive-calculator/incentive-calculator.component';
import { ListingsComponent } from './listings/listings.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule  ],
  declarations: [ AppComponent, IncentiveCalculatorComponent, ListingsComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
