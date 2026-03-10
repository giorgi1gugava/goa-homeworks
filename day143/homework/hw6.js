let role = prompt("შეიყვანე როლი (admin, user, guest):");

switch(role) {
  case "admin":
    console.log("სრული წვდომა");
    break;

  case "user":
    console.log("შეზღუდული წვდომა");
    break;

  case "guest":
    console.log("მხოლოდ ნახვის უფლება");
    break;

  default:
    console.log("როლი არ არის განსაზღვრული");
}