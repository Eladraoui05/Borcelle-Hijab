import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from 'react-icons/bs';

const Header = ({ cartItems, setCartItems, addToCart }) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [cartItemActive, setCartItemActive] = useState(false);
  const [searchFormActive, setSearchFormActive] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setNavbarActive((prev) => !prev);
    setSearchFormActive(false);
    setCartItemActive(false);
  };

  const toggleCartItem = () => {
    setCartItemActive((prev) => !prev);
    setNavbarActive(false);
    setSearchFormActive(false);
  };

  const toggleSearchForm = () => {
    setSearchFormActive((prev) => !prev);
    setNavbarActive(false);
    setCartItemActive(false);
  };

  const removeCartItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const goToCart = () => {
    setCartItemActive(false); 
    navigate("/cart", { state: { cartItems } });
  };

  return (
    <header className="headerM">
      <a href="#" className="logo">
        <Link className="nav-link" to="/">
          <img
            src="images/hijab logo.png"
            alt="Logo"
            style={{ borderRadius: "50px" }}
          />
        </Link>
      </a>

      <nav className={`navbar ${navbarActive ? "active" : ""}`}>
        <a href="#home"><Link className="nav-link" to="/">HOME</Link></a>
        <a href="#about">About</a>
        <a href="#menu">Category</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="icons">
        <button id="menu-btn" onClick={toggleNavbar}>
          <i className="fas fa-bars"></i>
        </button>
        
        <button id="cart-btn" onClick={toggleCartItem}>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>

      {cartItemActive && (
        <div className="cart-items-container active">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <span
                    className="fas fa-times"
                    onClick={() => removeCartItem(index)}
                    style={{ cursor: "pointer" }}
                  ></span>
                  <img src={item.image} alt={item.name} />
                  <div className="content">
                    <h3>{item.name}</h3>
                    <div className="price">{item.price}MAD</div>
                  </div>
                </div>
              ))}
              <button onClick={goToCart} className="btn">
                Checkout Now
              </button>
            </>
          )}
        </div>
      )}

      <Link to="/signin">
        <div className='user'>
          <BsPersonCircle className='icon' />
        </div>
      </Link>
    </header>
  );
};

export default Header;
