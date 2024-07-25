function classDecorator(constructor: any) {}

@classDecorator
export class SuperClass {
  private _propierty: string = "propiedad";

  print() {
    console.log("Hoooola a Todos");
  }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);
