import { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import CartIcon from "../assets/icons/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Button from "./Button";
import { gallery, details } from "../data";
import DeleteIcon from "../assets/icons/icon-delete.svg";

function Navbar({ cartContent, setCartContent }) {
  const [isCartOn, setIsCartOn] = useState(true);

  return (
    <nav className="navbar">
      <div className="nav-texts">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>

        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="nav-imgs">
        <div
          onMouseEnter={() => setIsCartOn(true)}
          onMouseLeave={() => setIsCartOn(true)}>
          <img className="cart" src={CartIcon} alt="cart-icon" />
          <Cart
            isVisible={isCartOn}
            cartContent={cartContent}
            setCartContent={setCartContent}
          />
        </div>
        <img className="avatar" src={Avatar} alt="avatar-img" />
      </div>
    </nav>
  );
}

function Cart({ isVisible, cartContent, setCartContent }) {
  return (
    <div className={`cart-tab ${isVisible ? "visible" : ""}`}>
      <h2>Cart</h2>

      {cartContent ? (
        <div className="full-cart">
          <div className="cart-details">
            <img src={gallery[0].thumb} alt={gallery[0].alt} />
            <p>
              {details.name} {`$${details.price}.00 x ${cartContent} `}
              <strong>{`$${details.price * cartContent}.00`}</strong>
            </p>
            <button onClick={() => setCartContent(0)} className="delete-button">
              <img src={DeleteIcon} alt="Delete Icon" />
            </button>
          </div>
          <Button>Checkout</Button>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>{" "}
        </div>
      )}
    </div>
  );
}

export default Navbar;
