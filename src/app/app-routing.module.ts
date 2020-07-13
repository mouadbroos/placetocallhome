import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncentiveCalculatorComponent } from './incentive-calculator/incentive-calculator.component';
import { ListingsComponent } from './listings/listings.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: IncentiveCalculatorComponent },
  { path: 'listings', component: ListingsComponent },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    CommonModule 
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }