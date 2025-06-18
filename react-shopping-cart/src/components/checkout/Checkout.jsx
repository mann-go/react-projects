import { useBasket } from "../../contexts/BasketContext";
import Button from "../reusable/button/Button";
import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";
import { formatPrice } from "../../utils/utility";

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
        <div className="payment-container">
          <div className="express-checkout">
            <section>
              <fieldset className="flex">
                <legend>
                  <h3>Express Checkout</h3>
                </legend>
                <div className="flex">
                  <Button id="paypal" type="button" text="PayPal" />
                  <Button id="google-pay" type="button" text="Google Pay" />
                  <Button id="apple-pay" type="button" text="Apple Pay" />
                  <Button id="visa" type="button" text="Visa" />
                </div>
              </fieldset>
            </section>
          </div>
          <form id="customer-details">
            <section>
              <h2>Contact Information</h2>
              <label htmlFor="email">
                <input id="email" type="email" placeholder="Email" required />
              </label>
            </section>
            <section>
              <h2>Shipping Address</h2>
              <div className="flex">
                <label htmlFor="first-name">
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </label>
                <label htmlFor="last-name">
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </label>
              </div>
              <label htmlFor="company-name">
                <input
                  id="company-name"
                  type="text"
                  placeholder="Company (required for business addresses)"
                  required
                />
              </label>
              <label htmlFor="address-line-one">
                <input
                  id="address-line-one"
                  type="text"
                  placeholder="Address Line 1"
                  required
                />
              </label>
              <label htmlFor="address-line-two">
                <input
                  id="address-line-two"
                  type="text"
                  placeholder="Address Line 2"
                  required
                />
              </label>
              <label htmlFor="appartment">
                <input
                  id="appartment"
                  type="text"
                  placeholder="Appartment, suite, etc"
                  required
                />
              </label>
              <label htmlFor="city">
                <input id="city" type="text" placeholder="City" required />
              </label>
              <div className="flex">
                <label htmlFor="region">
                  <select name="region" id="region" required>
                    <option value="">United Kingdom</option>
                  </select>
                </label>
                <label htmlFor="postcode">
                  <input
                    id="postcode"
                    type="text"
                    placeholder="Postcode"
                    required
                  />
                </label>
              </div>

              <label htmlFor="phone-number">
                <input
                  id="phone-number"
                  type="tel"
                  placeholder="Phone (optional)"
                />
              </label>
            </section>
          </form>
          <Button
            id="proceed-to-checkout"
            type="button"
            text="Proceed to Checkout"
          />
        </div>
      </div>
    </>
  );
}

export default Checkout;
