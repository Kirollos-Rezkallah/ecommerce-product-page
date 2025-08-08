import Logo from "../assets/icons/logo.svg";
import Cart from "../assets/icons/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

function Navbar() {
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
        <img className="cart" src={Cart} alt="cart-icon" />
        <img className="avatar" src={Avatar} alt="avatar-img" />
      </div>
    </nav>
  );
}

export default Navbar;
