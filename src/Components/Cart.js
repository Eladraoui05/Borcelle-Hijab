import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import "./Cart.css";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const initialCart = location.state?.cartItems || [];
  const [cart, setCart] = useState(initialCart);

  const removeItemFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(newQuantity, 1) }
        : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemQuantity = item.quantity || 1;
      return total + itemPrice * itemQuantity;
    }, 0);
    return total.toFixed(2);
  };

  const goToCheckout = () => {
    navigate("/checkout", { state: { cartItems: cart } }); 
  };

  return (
    <div style={{ margin: "20px 50px" }}>
      <h1 style={{ marginTop: "100px", textAlign: "center" }}>Shopping Cart</h1>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart">
              <img src={item.image} className="img-cart" alt={item.title} />
              <p>{item.title}</p>
              <p>
                {((parseFloat(item.price) || 0) * (item.quantity || 1)).toFixed(2)}MAD
              </p>
              <div>
                <button
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                  className="btn"
                >
                  -
                </button>
                <span>{item.quantity || 1}</span>
                <button
                  className="btn"
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                >
                  +
                </button>
              </div>
              <button className="btn" onClick={() => removeItemFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <h2>Total: {calculateTotal()} MAD</h2>
        <button disabled={cart.length === 0} onClick={goToCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
