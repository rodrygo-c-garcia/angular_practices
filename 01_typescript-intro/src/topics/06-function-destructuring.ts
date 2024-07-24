export interface IProduct {
  description: string;
  price: number;
}

interface ITaxCalculationOptions {
  tax: number;
  products: IProduct[];
}

const phone: IProduct = {
  description: "Nokia",
  price: 100.56,
};

const tablet: IProduct = {
  description: "Ipad",
  price: 400.56,
};

const shoppingCart: Array<IProduct> = [phone, tablet];
const tax = 0.15;

export function taxCalculation({
  tax,
  products,
}: ITaxCalculationOptions): [number, number] {
  let total = 0;

  products.forEach(({ price }) => (total += price));

  return [total, total * tax];
}

const [total, taskTotal] = taxCalculation({ tax, products: shoppingCart });

console.log(`Total: ${total}`);
console.log(`Tax: ${taskTotal}`);
