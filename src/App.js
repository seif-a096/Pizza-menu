import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Pizza(probs) {
  return (
    <div className="pizza">
      <img src={probs.img} alt={probs.name} />
      <div>
        <h3>{probs.name}</h3>
        <p>{probs.ingredients}</p>
        <span>{probs.price}</span>
      </div>
    </div>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => (
        <Pizza
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          img={pizza.photoName}
          available={!pizza.soldOut}
        />
      ))}
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Footer() {
  let openH = 12;
  let closeH = 22;
  let Time = new Intl.DateTimeFormat("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
  let currH = new Date().getHours();
  return (
    <footer className="footer">
      {Time}{" "}
      {currH > openH && currH < closeH
        ? `- We're currently open!`
        : `We're closed!`}
    </footer>
  );
}

export default App;
