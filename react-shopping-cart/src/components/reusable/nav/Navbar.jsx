import { Link } from "react-router-dom";
import "./Navbar.css";
import Basket from "../basket/Basket";
import Button from "../button/Button";

function Navbar() {
  return (
    <>
      <nav>
        <h1>Shamazon</h1>
        <Link to="/"><Button id="home" type="button" text="Home"/></Link>
        <Link to="/products/all"><Button id="products" type="button" text="Products"/></Link>
        <Link to="/checkout"><Basket/></Link>
      </nav>
    </>
  );
}

export default Navbar;
