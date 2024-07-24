let skill: Array<string> = ["Bash", "linux"];

class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}


let persona1 = new Persona("Juan", 16);


interface animal {
  name: String,
  age: number,
  raza?: string
}

const animal: animal = {
  name: "lupito",
  age: 3
}