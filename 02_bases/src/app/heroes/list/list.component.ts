import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroNames: Array<string> = [
    'Spiderman',
    'Hulk',
    'Chapulin',
    'Super San',
    'Goku',
  ];

  message: string = 'Borre un Heroe';

  deleteHero(): void {
    this.heroNames.length > 0
      ? (this.message = this.heroNames.pop()!)
      : (this.message = 'Ya no hay mas heroes');
  }
}
