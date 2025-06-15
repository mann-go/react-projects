import { useBasket } from "../../contexts/BasketContext";
import Button from "../reusable/button/Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";
import { formatPrice } from "../../utils/utility";

function Checkout() {
  const { basket, removeFromBasket } = useBasket();
  console.log(basket);

  if (basket.length === 0) {
    return (
      <>
        <div className="container">
          <h2>Your basket is empty!</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="checkout-container">
        <h2>Your items:</h2>
        {basket?.map((product) => (
          <div key={product.productId} className="product checkout-item">
            <Button
              id={product.title}
              type="button"
              text="Remove"
              onClick={() => removeFromBasket(product)}
              icon={faTrash}
            />
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <h3>{formatPrice(product.price)}</h3>
              <label htmlFor={product.title}>
                Quantity: {product.quantity}
              </label>
              <h3>Total: {formatPrice(product.price * product.quantity)}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="payment-container">
        
      </div>
    </>
  );
}

export default Checkout;
