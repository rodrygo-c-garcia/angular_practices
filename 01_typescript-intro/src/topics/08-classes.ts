export class Person {
  constructor(
    protected _name: string,
    protected _email: string,
    protected _addres?: string
  ) {}

  getName(): string {
    return this._name;
  }

  getEmail(): string {
    return this._email;
  }

  getAddres(): string | undefined {
    return this._addres;
  }
}

//Clase heroe
export class Hero extends Person {
  constructor(
    protected _name: string,
    protected _email: string,
    protected _power: number,
    protected _addres?: string
  ) {
    super(_name, _email, _addres);
  }

  getPower(): number {
    return this._power;
  }
}

const iroman = new Hero("iroman", "iro@gmail.com", 100, "");
console.log(iroman.getPower());
