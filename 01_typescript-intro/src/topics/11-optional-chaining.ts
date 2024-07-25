export interface Ipassenger {
  name: string;
  children?: Array<string>;
}

const passenger1: Ipassenger = {
  name: "Ariel",
};

const passenger2: Ipassenger = {
  name: "Maria",
  children: ["Danny", "Karla", "Eymi"],
};

const printChildrenPassenger = (passenger: Ipassenger) => {
  console.log(passenger.name, passenger.children?.length || 0);
  // console.log(passenger.name, passenger.children!.length);
};

printChildrenPassenger(passenger1);
