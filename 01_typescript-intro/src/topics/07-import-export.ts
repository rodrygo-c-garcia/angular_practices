import { IProduct, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Array<IProduct> = [
  {
    description: "Alcatel",
    price: 500.88,
  },
  {
    description: "Iphone",
    price: 1999.99,
  },
];

const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log("Total: ", total);
console.log("Total tax: ", tax);
