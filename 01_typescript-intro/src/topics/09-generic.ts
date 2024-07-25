// funcion generico
export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Ariel Rodrigo");
const amINumber = whatsMyType<number>(1000);
const amIBool = whatsMyType<boolean>(true);
const amIArray = whatsMyType<Array<number>>([1, 2, 3, 4, 5, 6]);

console.log(amIString.split(""));
console.log(amINumber.toFixed());
console.log(amIBool.valueOf());
console.log(amIArray.join("-"));

// clase generica
class GenericList<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberList = new GenericList<number>();
numberList.add(1);
numberList.add(2);
console.log(numberList.getAll()); // [1, 2]

const stringList = new GenericList<string>();
stringList.add("A");
stringList.add("B");
console.log(stringList.getAll()); // ['A', 'B']
