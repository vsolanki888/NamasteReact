import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  console.log("Header Component");
  const [buttonText, setButtonText] = useState("login");
  useEffect(() => {
    console.log("Header useEffect");
  }, [buttonText]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                setButtonText(buttonText === "login" ? "logout" : "login");
              }}
            >
              {buttonText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
