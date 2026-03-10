const users = [
    {name: "Nika", age: 20},
    {name: "Ana", age: 25},
    {name: "Gio", age: 17}
  ];
  
  users.forEach(function(user) {
    const futureAge = user.age + 15;
    console.log(user.name + " - " + futureAge + " წლის");
  });