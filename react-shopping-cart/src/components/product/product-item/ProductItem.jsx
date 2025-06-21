import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faStar,
  faPlus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../reusable/button/Button";
import { BasketProvider, useBasket } from "../../contexts/BasketContext";
import "./ProductItem.css";
import { useEffect, useState } from "react";
import { formatPrice } from "../../../utils/utility";

function ProductItem({ product }) {
  const { addToBasket } = useBasket();
  const [quantity, setQuantity] = useState(1);

  // Confirmation message
  const [confirmation, setConfirmation] = useState(null);

  const minQuantity = 1;
  const maxQuantity = 10;

  // Confirmation timer
  useEffect(() => {
    if (confirmation) {
      const timer = setTimeout(() => {
        setConfirmation(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [confirmation]);

  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity((prev) => prev + 1);
    }
    return;
  };

  const decreaseQuantity = () => {
    if (quantity > minQuantity) {
      setQuantity((prev) => prev - 1);
    }
    return;
  };

  const prepAddToBasket = () => {
    addToBasket({
      productId: product.id,
      image: product.image,
      title: product.title,
      description: product.description,
      price: product.price,
      quantity: quantity,
    });

    setConfirmation(`Added ${quantity} of item to basket`);
  };

  return (
    <>
      <div className="product">
        <div className="ratings">
          <p>
            {product.rating?.rate ?? "No"} <FontAwesomeIcon icon={faStar} />
          </p>
          <p>{product.rating?.count} reviews</p>
        </div>
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <h2>{product.title}</h2>
        <div className="product-info">
          <div className="product-info-footer">
            <h3>{formatPrice(product.price)}</h3>
              <div className="button-container">
                <Button
                  className="action"
                  id="decrease-quantity"
                  type="button"
                  text={""}
                  onClick={() => decreaseQuantity()}
                  icon={faMinus}
                />
                <p name="number-of-product" id={product.title}>
                  {quantity}
                </p>
                <Button
                  className="action"
                  id={"increase-quantity"}
                  type="button"
                  text={""}
                  onClick={() => increaseQuantity()}
                  icon={faPlus}
                />
              </div>
          </div>
          <Button
            id={"add-to-cart"}
            type="button"
            text="Add to Cart"
            onClick={() => prepAddToBasket()}
          />
        </div>
        {confirmation && (
          <div className="confirmation-message">
            {confirmation}
            <Button
              className="action"
              id="clear-confirmation-message"
              type="button"
              text={""}
              onClick={() => setConfirmation(null)}
              icon={faCircleXmark}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ProductItem;
