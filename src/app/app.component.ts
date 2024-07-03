import { Component } from '@angular/core';
import {RollData} from "./roll-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  rollData: RollData;

  constructor(){
    this.rollData = this.getRollData(3);
  }

  onRollDice(): void {
    this.rollData = this.getRollData(3);
  }

  private getRandomDiceValue(): number{
  return 1 + Math.floor(6 * Math.random());
  }

  private getRollData(numberOfDice: number): RollData {
    const values: number[] = [];
    let total: number = 0;
    for (let i: number = 0; i < numberOfDice; i++) {
      let diceValue: number = this.getRandomDiceValue()
      values.push(diceValue);
      total += diceValue;
    }
    return {
      numberOfDice: numberOfDice,
      values: values,
      total: total
    }

  }
}
