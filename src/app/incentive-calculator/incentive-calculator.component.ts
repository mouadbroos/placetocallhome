import { Component, OnInit } from '@angular/core';
import {IncentiveBreakdown , Client , Property} from "../model/incentiveBreakdown";

@Component({
  selector: 'app-incentive-calculator',
  templateUrl: './incentive-calculator.component.html',
  styleUrls: ['./incentive-calculator.component.css']
})

export class IncentiveCalculatorComponent implements OnInit {

  private clientDownPaymentRate = 5;
  private minimumDownPaymentRate = 5;
  public initialIncentivePercentage = 10;


  public showCalculations = false;
  public client : Client;
  public property : Property;
  public incentive : IncentiveBreakdown;

  constructor() { }

  ngOnInit() {
    this.client = new Client();
    this.client.maximumEligibility = 0; 
    this.client.salary = 0;
    this.client.downPaymentRate = this.clientDownPaymentRate;

    this.property = new Property();
    this.property.minimumDownPayment = 0;
    this.property.propertyCost = 0;

    this.incentive = new IncentiveBreakdown();
    this.incentive.incentiveAmount = 0;
    this.incentive.incentivePercentage = this.initialIncentivePercentage;
  }

  public calculate(){
    this.client.maximumEligibility = this.client.salary * 4;

    this.property.propertyCost = this.client.maximumEligibility / (1 - this.client.downPaymentRate/100)

    this.property.minimumDownPayment = this.property.propertyCost * this.minimumDownPaymentRate/100

    this.incentive.incentiveAmount = this.property.propertyCost * this.incentive.incentivePercentage/100

    this.showCalculations = true;
  }

    public setIncentivePercentage(value : number){
        this.incentive.incentivePercentage = value;
        this.calculate();        
    }

    public isNumberKey(evt)
			{
				var charCode = (evt.which) ? evt.which : evt.keyCode;
				if (charCode != 46 && charCode > 31 
				&& (charCode < 48 || charCode > 57))
				return false;
				return true;
			}  

}