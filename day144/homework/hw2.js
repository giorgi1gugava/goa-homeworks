const user = {
    name: "ანა",
    email: "ana@example.com"
  };
  

  const { name, email, role = "guest" } = user;
  
  console.log(name);  
  console.log(email); 
  console.log(role);  