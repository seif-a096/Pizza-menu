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
    <li className="pizza">
      <img src={probs.pizzaObj.photoName} alt={probs.pizzaObj.name} />
      <div>
        <h3>{probs.pizzaObj.name}</h3>
        <p>{probs.pizzaObj.ingredients}</p>
        <span>{probs.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
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
  let isOpen = currH > openH && currH < closeH;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            - We're currently open till {`${closeH}:00 `}! Come visit us or
            Order Online!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We're closed!</p>
      )}
    </footer>
  );
}

export default App;
