import { useState } from "react";
import CartIcon from "../assets/icons/icon-cart.svg";
import Button from "./Button";

function Details({ setCartContent }) {
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
      <h2>Fall limited edition sneakers</h2>
      <p className="paragraph">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <p className="price">$125.00</p>
      <p className="price-before">$250.00</p>
      <div className="flex-div">
        <div className="quantity-buttons">
          <button onClick={handleSubtract}>−</button>
          <button>{quantity}</button>
          <button onClick={handleAdd}>+</button>
        </div>
        <Button onClick={setCartContent(quantity)}>
          <img src={CartIcon} alt="cart-icon" />
          <p>Add to cart</p>
        </Button>
      </div>
    </section>
  );
}

export default Details;
