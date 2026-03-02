function login(username, password) {
    return username === "admin" && password === "1234" ? "Welcome"
         : username === "admin" ? "Wrong password"
         : "Access denied";
  }
  
  
  let user = prompt("Enter username:");
  let pass = prompt("Enter password:");
  
  console.log(login(user, pass));