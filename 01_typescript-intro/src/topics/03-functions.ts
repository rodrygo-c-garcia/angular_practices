const suma = (a: number, b: number): number => a + b;
const result: number = suma(5, 6)

function getName(nombre: string): string {
  return nombre;
}

function multiply(firsNumber: number, secondNumber?: number, base: number = 3) {
  return firsNumber * base;
}

interface Character {
  name: string;
  hp: number;
  showVp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
}

const strider: Character = {
  name: "Aragon",
  hp: 50,
  showVp() {
    console.log(`Puntos vida: ${this.hp}`);
  }
}

healCharacter(strider, 10);

strider.showVp();