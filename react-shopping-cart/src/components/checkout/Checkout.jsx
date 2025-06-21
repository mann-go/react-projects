import { useBasket } from "../contexts/BasketContext";
import Button from "../reusable/button/Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";
import { formatPrice } from "../../utils/utility";
import ShippingForm from "./ShippingForm";

function Checkout() {
  const { basket, removeFromBasket, total, totalItemQuantity } = useBasket();
  console.log(basket);

  if (basket.length === 0) {
    return (
      <>
        <div className="checkout-container">
          <h2>Your basket is empty!</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="checkout-container">
        <div className="summary-container">
          <h2>Basket Summary - {totalItemQuantity} items</h2>
          <hr />
          {basket?.map((product) => (
            <div key={product.productId} className="summary-item">
              <div className="summary-item-body">
                <img src={product.image} alt={product.title} />
                <div className="details">
                  <h4>{product.title}</h4>
                  <h4>x {product.quantity}</h4>
                  <h4>{formatPrice(product.price)} Each</h4>
                  <h4>
                    Subtotal: {formatPrice(product.price * product.quantity)}
                  </h4>
                </div>
              </div>
              <Button
                id={product.title}
                type="button"
                text="Remove"
                onClick={() => removeFromBasket(product, 1)}
                icon={faTrash}
              />
            </div>
          ))}
          <hr />
          <h2>Order Total: {formatPrice(total)}</h2>
        </div>
        <ShippingForm />
      </div>
    </>
  );
}

export default Checkout;
