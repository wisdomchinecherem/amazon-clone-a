import "../styles/header.css";
// import "../assets/utility/bootstrap v.5/css/bootstrap.css";
import logo from "../assets/images/amazon-logo.png";
import "../assets/utility/fontawesome-free-6.4.2-web 22222/fontawesome-free-6.4.2-web/css/all.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>
      {/* <div className="header__logo">amazon</div> */}
      <div className="header__search">
        <input type="text" className="input__searchInput" />
        <div className="header--searchIcon">
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header-user fs-10">
              Hello, {user ? user?.email : "Guest"}
            </span>
            <span className="header-user--option fs-13">
              {user ? "Sign out" : "Sing In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="first-sales--option fs-10">Returns</span>
          <span className="second-sales--option fs-13">& Orders</span>
        </div>
        <div className="header__option">
          <span className="option-subscription fs-10">Your</span>
          <span className="option--subscription fs-13">Prime</span>
        </div>
        <Link to="/checkout" className="checkout__link">
          <div className="header__optionBasket">
            <i className="fa fa-shopping-basket shopping_basket"></i>
            <span className="header-basket--count fs-13">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
