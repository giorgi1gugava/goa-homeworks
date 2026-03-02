const items = [
    {
      name: "გიორგი",
      age: 25,
      profession: "Developer"
    },
    {
      brand: "Toyota",
      model: "Corolla",
      year: 2020
    },
    {
      title: "JavaScript Basics",
      pages: 350,
      author: "John Doe"
    }
  ];
  const [person, car, book] = items;
  
  const { name, age, profession } = person;
  
  const { brand, model, year } = car;
  
  const { title, pages, author } = book;
  

  
  console.log(name, age, profession);
  console.log(brand, model, year);
  console.log(title, pages, author);