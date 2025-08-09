import { useState } from "react";
import CartIcon from "../assets/icons/icon-cart.svg";
import Button from "./Button";
import { details } from "../data";

function Details({ setCartContent, cartContent }) {
  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
    setQuantity((s) => s + 1);
  }

  function handleSubtract() {
    if (quantity > 0) setQuantity((s) => s - 1);
  }
  return (
    <section className="details">
      <p className="company-name">Sneaker company</p>
      <h2>{details.name}</h2>
      <p className="paragraph">{details.description}</p>
      <p className="price">{`$${details.price}.00`}</p>
      <p className="price-before">{details.priceBeforeDiscount}</p>
      <div className="flex-div">
        <div className="quantity-buttons">
          <button onClick={handleSubtract}>−</button>
          <button>{quantity}</button>
          <button onClick={handleAdd}>+</button>
        </div>
        <Button
          className="add-to-cart"
          onClick={() => setCartContent(quantity)}>
          <img src={CartIcon} alt="cart-icon" />
          <p>Add to cart</p>
        </Button>
      </div>
    </section>
  );
}

export default Details;
