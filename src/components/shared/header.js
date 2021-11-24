import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>To Do List</h1>
      <nav>
        <li>
          <Link to="/" className="item">Home</Link>
        </li>
        <li>
          <Link to="/cadastro" className="item">Cadastro</Link>
        </li>
      </nav>
    </header>
  );
};
export default Header;
