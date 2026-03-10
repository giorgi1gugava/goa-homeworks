const person = {
    firstName: "გიორგი",
    lastName: "კაპანაძე",
    address: {
      city: "თბილისი",
      country: "საქართველო"
    }
  };
  
  
  const { firstName, address: { city, country } } = person;
  
  console.log(firstName); 
  console.log(city);      
  console.log(country);   