import React from "react";
import { useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};
const selectAllPizzas = (reduxState) => {
  return reduxState.pizzas;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectAllPizzas);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Pizza Explorer</h3>
          <p>
            Welcome back, <strong>{user.name}</strong>! Check your favorite
            pizzas:
          </p>
          <p>
            Total favorites found: <strong>{pizzas.length}</strong>
          </p>
        </div>
      </div>
      <div className="row">
        <ul className="nav">
          {pizzas.map((p) => {
            return (
              <li key={p.id} className="col-md-4">
                <div className="card card-body">
                  <h5>{p.name}</h5>
                  <p>{p.description}</p>
                  <p>
                    <small>Amount bought: {p.bought}</small>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
