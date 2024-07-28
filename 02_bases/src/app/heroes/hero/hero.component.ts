import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Iroman';
  nameInput: string = '';
  public age: number = 45;
  ageInput: number = 0;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  updateData(): void {
    this.name = this.nameInput;
    this.age = this.ageInput;
  }
}
