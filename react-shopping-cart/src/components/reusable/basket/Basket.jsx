import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useBasket } from "../../../contexts/BasketContext";
import "./Basket.css";

function Basket() {
  const { basket } = useBasket();

  return (
    <div className="basket">
        {basket.length}
      <FontAwesomeIcon icon={faShoppingCart} size="xl"/>
    </div>

  )
}

export default Basket;
