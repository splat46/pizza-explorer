import React from "react";
import "./App.css";
import PizzaList from "./components/PizzaList/PizzaList";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Best Pizzas in Town!</h1>
      <PizzaList />
    </div>
  );
}

export default App;
