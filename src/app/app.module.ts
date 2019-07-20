import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IncentiveCalculatorComponent } from './incentive-calculator/incentive-calculator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, IncentiveCalculatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
