/*შექმენი ახალი მასივი, სადაც ყველა პროდუქტის ფასი 10%-ით შემცირებული იქნება.
const products = [
  {name: "Phone", price: 1000},
  {name: "Laptop", price: 2000}
];*/

const products = [
    {name: "Phone", price: 1000},
    {name: "Laptop", price: 2000}
  ];
  
  const discountedProducts = products.map(product => ({
    name: product.name,
    price: product.price * 0.9
  }));
  
  console.log(discountedProducts);