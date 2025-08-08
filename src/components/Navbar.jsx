import { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import CartIcon from "../assets/icons/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

function Navbar() {
  const [isCartOn, setIsCartOn] = useState(false);

  function handleHoverEnter() {
    setIsCartOn(true);
  }

  function handleHoverLeave() {
    setIsCartOn(false);
  }
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
        <div>
          <img
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            className="cart"
            src={CartIcon}
            alt="cart-icon"
          />
          <Cart isVisible={isCartOn} />
        </div>
        <img className="avatar" src={Avatar} alt="avatar-img" />
      </div>
    </nav>
  );
}

function Cart({ isVisible }) {
  return (
    <div className={`cart-tab ${isVisible ? "visible" : ""}`}>
      <h2>Cart</h2>
      <div className="cart-content">
        <p className="empty-cart">Your cart is empty.</p>
      </div>
    </div>
  );
}

export default Navbar;
