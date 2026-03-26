const users = [
    { name: "Nika", age: 20 },
    { name: "Ana", age: 25 },
    { name: "Gio", age: 17 }
  ];
  
  const updatedUsers = users.map(user => {
return {...user,age: user.age * 2};
  });
  
  console.log(updatedUsers);