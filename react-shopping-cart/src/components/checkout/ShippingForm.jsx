import Button from "../reusable/button/Button";

function ShippingForm() {
    return (
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
    );
}

export default ShippingForm;