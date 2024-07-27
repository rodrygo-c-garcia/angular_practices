import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public x: number = 10;
  constructor() {}

  increaseBy(value: boolean): void {
    value ? this.x++ : this.x--;
  }

  reseteCounter(): void {
    this.x = 10;
  }
}
