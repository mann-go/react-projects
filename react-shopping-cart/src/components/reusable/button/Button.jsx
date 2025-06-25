import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

function Button({ className, id, type, text, onClick, icon }) {
  // Import icon in caller Component i.e Checkout.jsx imports the icon and passes it to Button.
  if (icon) {
    return (
      <button aria-label={id} className={className} id={id} type={type} onClick={onClick}>
        <FontAwesomeIcon icon={icon} /> {text}
      </button>
    );
  } else {
    return (
      <button aria-label={id} className={className} id={id} type={type} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
