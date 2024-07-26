import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Mi first page in Angular';
  public x: number = 10;

  increaseBy(value: boolean): void {
    value ? this.x++ : this.x--;
  }

  reseteCounter(): void {
    this.x = 10;
  }
}
