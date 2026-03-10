const product = {
    name: "ლეპტოპი",
    price: 1500,
    currency: "USD"
  };
  
  const printProductInfo = ({ name, price, currency }) => {
    console.log(`პროდუქტი: ${name}, ფასი: ${price} ${currency}`);
  };
  
  
  printProductInfo(product); 
  