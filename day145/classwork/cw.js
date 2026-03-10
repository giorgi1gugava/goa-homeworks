const users = [
    { name: "Nika", surname: "Beridze", email: "nika@gmail.com" },
    { name: "Ana", surname: "Gogoladze", email: "ana@gmail.com" },
    { name: "Giorgi", surname: "Kapanadze", email: "giorgi@gmail.com" }
  ];
  
  const [u1, u2, u3] = users;
  
  const { name: name1, surname: surname1, email: email1 } = u1;
  const { name: name2, surname: surname2, email: email2 } = u2;
  const { name: name3, surname: surname3, email: email3 } = u3;
  
  console.log(name1, surname1, email1);
  console.log(name2, surname2, email2);
  console.log(name3, surname3, email3);