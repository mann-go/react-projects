import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "../../contexts/BasketContext";
import "./Basket.css";
import Button from "../button/Button";

function Basket() {
  const { totalItemQuantity } = useBasket();

  return (
    <div className="basket">
      <Button
        className="nav-button"
        id="basket"
        type="button"
        text={totalItemQuantity + " items"}
        icon={faShoppingCart}
      ></Button>

    </div>
  );
}

export default Basket;
