import "./Button.css";

function Button({id, type, text, action}) {
    return (
        <button id={id} type={type}>{text}</button>
    )
}

export default Button;