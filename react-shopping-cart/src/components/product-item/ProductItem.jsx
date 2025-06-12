import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";
import "./ProductItem.css";

function ProductItem({ props }) {
  // console.log(props);

  const formattedPrice = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "GBP",
  }).format(props.price);

  return (
    <>
      <div className="product">
        <div className="ratings">
          <p>
            {props.rating?.rate ?? "No"} <FontAwesomeIcon icon={faStar} />
          </p>
          <p>{props.rating?.count} reviews</p>
        </div>
        <div className="product-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="product-info">
          <h3>{props.title}</h3>
          <h3>{formattedPrice}</h3>
          <label htmlFor={props.title}>
            Quantity:
            <input type="number" name="number-of-product" id={props.title} />
          </label>
        </div>
        <Button id={"add-to-cart"} type="button" text="Add to Cart" />
      </div>
    </>
  );
}

export default ProductItem;
