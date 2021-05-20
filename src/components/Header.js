import React, { useState } from "react";
import "../styles/Header.css";
import BottomHeader from "./BottomHeader";
import LeftNavigation from './LeftNavigation';
import lang from "../assets/us.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from "../StateProvider";



function Header() {
  const [selectedProduct,setSelectedProduct] = useState('All');
  const [basket , dispatch] = useStateValue([]);
  console.log(basket)
  const [showUp, setShowUp] = useState(false);
  const showTheLanguageBar = (e) => {
    const languageBar = document.querySelector(".language_bar");
    if (!showUp) {
      languageBar.classList.add("active");
    } else {
      console.log("done");
    }
    setShowUp(true);
  };
    const enlargeCategory = (event) => {
        setSelectedProduct(event.target.value);
    }
  const hideTheLanguageBar = (e) => {
    const languageBar = document.querySelector(".language_bar");
    if (showUp) {
      languageBar.classList.remove("active");
      setShowUp(false);
    } else {
      console.log("done");
    }
  };

  const createLine = (e) => {
    if (!showUp) {
      e.target.parentElement.classList.add("createLine");
      setShowUp(true);
    } else {
      e.target.parentElement.classList.remove("createLine");
      setShowUp(false);
    }
  };

  const showLeftNavigation = () => {
    const closeIcon = document.querySelector('.closeNav__icon');
    const darkBack = document.querySelector('.dark__backWrapper');
    const leftNavbar = document.querySelector('.left__navBar');
    leftNavbar.classList.add('left__navigationActive');
    darkBack.style.display = "block";
    closeIcon.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  const hideLeftNavigation = () => {
    const closeIcon = document.querySelector('.closeNav__icon');
    const darkBack = document.querySelector('.dark__backWrapper');
    const leftNavbar = document.querySelector('.left__navBar');
    leftNavbar.classList.remove('left__navigationActive');
    darkBack.style.display = "none";
    closeIcon.style.display = "none";
    document.body.style.overflow = "scroll";
  }
  return (
    <div className="header">
      <div className="header__wrapper">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="Amazon Logo"
          className="header_logo"
        />
        <div className="delivery">
          <LocationOnOutlinedIcon />
          <div className="deliver">
            <span>Delivery to</span>
            <h4>Uzbekistan</h4>
          </div>
        </div>
        <div className="search_bar">
          <select value={selectedProduct} className={selectedProduct.length >= 5 ? 'enlarge' : 'category'}  onChange={enlargeCategory}>
            <option value="All">All</option>
            <option value="Clothes">Clothes</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Laptops">Laptops</option>
            <option value="Watches">Watches</option>
          </select>
          <input type="search" id="search" onClick={createLine} />
          <div className="search_icon">
            <SearchOutlinedIcon style={{ fontSize: "30px" }} />
          </div>
        </div>
        <div className="account">
          <div
            className="language"
            onMouseEnter={showTheLanguageBar}
            onMouseLeave={hideTheLanguageBar}
          >
            <img src={lang} alt="" className="lang_img" />
            <ArrowDropDownIcon />
            <div className="language_bar"></div>
          </div>
          <Link to="/login">
            <div className="sign_in_out">
              <div className="sign">
                <span>Hello, Sign In</span>
                <h4>Account&Lists</h4>
              </div>
              <ArrowDropDownIcon />
            </div>
          </Link>
          <div className="orders">
            <span>Returns</span>
            <h4>&Orders</h4>
          </div>
          <Link to="/cart">
            <div className="cart">
              <div className="counter">
                <span>{basket.basket.length}</span>
              </div>
              <img src={cart} alt="" className="cart_img" />
              <h4>Cart</h4>
            </div>
          </Link>
        </div>
      </div>
      <BottomHeader showNavbarPopup={showLeftNavigation}/>
      <div className="left__navBar">
      <CloseIcon onClick={hideLeftNavigation} style={{fontSize: "33px", display: "none"}} className="closeNav__icon"/>
      <LeftNavigation/>
      </div>
      <div className="dark__backWrapper" onClick={hideLeftNavigation}></div>
    </div>
  );
}

export default Header;
