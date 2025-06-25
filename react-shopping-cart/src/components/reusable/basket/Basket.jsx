import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "../../contexts/BasketContext";
import "./Basket.css";
import Button from "../button/Button";

function Basket() {
  const { totalItemQuantity } = useBasket();

  return (
    <Button
      
      className="nav-button"
      id="basket"
      type="button"
      text={"Basket: " + totalItemQuantity + " items"}
      // icon={faShoppingCart}
    ></Button>
  );
}

export default Basket;
