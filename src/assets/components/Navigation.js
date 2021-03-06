import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
// en este componente se enruta la aplicacion a las distintas vistas
const Navigation = props => {
  return (
      <nav className="navigation-style">
        <ul>
          <li>
            <Link to="/Breakfast">Desayunos</Link>
          </li>
          <li>
            <Link to="/Lunch">Almuerzos</Link>
          </li>
          <li>
            <Link to="/Readyorders">Pedidos Listos</Link>
          </li>
        </ul>
      </nav>
  );
};
export default Navigation;
