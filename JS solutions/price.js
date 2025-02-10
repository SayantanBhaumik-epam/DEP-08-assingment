const products = [
  { id: 1, name: "Widget", price: 50, quantity: 120 },
  { id: 2, name: "Gadget", price: 30, quantity: 80 },
  { id: 3, name: "Doohickey", price: 100, quantity: 200 },
  { id: 4, name: "Thingamajig", price: 75, quantity: 90 },
];

const updatedProducts = products.map((product) => {
  if (product.quantity > 100) {
    return { ...product, price: product.price * 0.9 };
  }
  return product;
});

const discountedProducts = updatedProducts.filter((product) => {
  return product.price < products.find((p) => p.id === product.id).price;
});

discountedProducts.forEach((product) => {
  console.log(`The ${product.name} is now $${product.price.toFixed(2)}`);
});
