import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "../../../contexts/BasketContext";
import "./Basket.css";
import Button from "../button/Button";

function Basket() {
  const { basket } = useBasket();

  return (
    <Button
      id="basket"
      type="button"
      text={basket.length}
      icon={faShoppingCart}
    ></Button>
  );
}

export default Basket;
