import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
//OnInit is an interface that provides initialization for the component.
export class MathComponent{
  //variables of the component....
  firstValue : number;
  secondValue : number;
  operand : string;
  result : number;

  constructor() {
    //Initialize the variables in the constructor...
    this.firstValue = 123;
    this.secondValue = 345;
    this.result = 0;
    this.operand = "+";
   }

   process() : void{ //This function does not return anything......
      switch(this.operand){
        case "+":
          this.result = this.firstValue + this.secondValue;
          return;          
        case "-":
          this.result = this.firstValue - this.secondValue;
          return;
        case "X":
          this.result = this.firstValue * this.secondValue;
          return;
        case "/":
          this.result = this.firstValue / this.secondValue;
          return;
      }
   }

}
