import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Basket() {
  const [basketContents, setBasketContents] = useState([]);

  return (
    <div className="basket">
        {basketContents.length}
      <FontAwesomeIcon icon={faShoppingCart} size="xl"/>
    </div>

  )
}

export default Basket;
