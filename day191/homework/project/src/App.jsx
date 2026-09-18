
import './App.css'

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 2500, category: "Electronics" },
    { id: 2, name: "Phone", price: 1800, category: "Electronics" },
    { id: 3, name: "Shoes", price: 300, category: "Fashion" },
    { id: 4, name: "Watch", price: 500, category: "Accessories" }
  ];
  let info = products.map((ff => <div key={ff.id}>{ff.id + " " + ff.name + " " + ff.price + " " + ff.category}</div>));



  const students = [
    { id: 101, name: "Giorgi", score: 95 },
    { id: 102, name: "Nika", score: 78 },
    { id: 103, name: "Saba", score: 88 },
    { id: 104, name: "Luka", score: 67 }
  ];
  let studentInfo = students.map((info1) => <li key={info1.id}>{info1.name + info1.score}</li>);


  const movies = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8 },
    { id: 2, title: "Interstellar", year: 2014, rating: 8.7 },
    { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0 }
  ];

  let movieInfo = movies.map((info2 => <p>{info2.title}<br />  year:{info2.year} <br /> rating:{info2.rating}</p>));



  const teams = [
    {
      id: 1,
      name: "Red Team",
      members: ["Giorgi", "Nika", "Saba"]
    },
    {
      id: 2,
      name: "Blue Team",
      members: ["Luka", "Dato", "Ana"]
    }
  ];

  let teamInfo = teams.map((team => <div key={team.id}>
    <h2>{team.name}</h2>
    <div>{team.members.map((person => <p key={team.id}>{person}</p>))}</div>
  </div>));



  const cart = [
    { id: 1, name: "Keyboard", price: 120, quantity: 2 },
    { id: 2, name: "Mouse", price: 60, quantity: 1 },
    { id: 3, name: "Monitor", price: 700, quantity: 2 }
  ];
  let cartInfo = cart.map((item => <p key={item.id}>{item.name} <br />  price:{item.price} <br /> quality:{item.quantity}<br /> total:{item.price * item.quantity}</p>))



  const users = [
    {
      id: 1,
      name: "Giorgi",
      age: 22,
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Nika",
      age: 25,
      skills: ["Python", "Django"]
    }
  ];
  let userInfo = users.map((user =><div key={user.id}>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
  
      <p>Skills:</p>
  
      {user.skills.map((skill =><li key={skill}>{skill}</li>))}
    </div>
  ));



  return (
    <>
      <h1>1</h1>
      <div>{info}</div>
      <h1>2</h1>
      <ul>{studentInfo}</ul>

      <h1>3</h1>
      <div>{movieInfo}</div>
      <h1>4</h1>
      <div>{teamInfo}</div>
      <h1>5</h1>
      <div>{cartInfo}</div>
      <h1>6</h1>
      <div>{ userInfo}</div>

    </>
  )
}

export default App
