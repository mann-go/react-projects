import { Link } from "react-router-dom";
import "./Navbar.css";
import Basket from "../basket/Basket";

function Navbar() {
  return (
    <>
      <nav>
        <h1>WEBSITE NAME</h1>
        <Link to="/">Home</Link>
        <Link to="/products/all">Products</Link>
        <Link to="/basket"><Basket/></Link>
      </nav>
    </>
  );
}

export default Navbar;
