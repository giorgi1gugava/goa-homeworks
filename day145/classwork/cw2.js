const user = [{
    name: "nika",
    surname: "nishnianidze",
    address: {
      city: {
        street: "beliashvili"
      },
      country: "Georgia"
    }
  }];
  
  const [{ name, surname, address: { city: { street }, country } }] = user;
  
  console.log(name, surname, street, country);