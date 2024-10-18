import React, { useState } from "react";
import "./App.css";
import imageshop from "../src/Images/adidas.png";
import { FaShoppingCart } from "react-icons/fa";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleGoToCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleLogoClick = () => {
    setShowCart(false);
  };

  return (
    <>
      <header>
        <div className="Container-head">
          <div className="logo" onClick={handleLogoClick}>
            <img src={imageshop} alt="Logo" />
          </div>
          <div>
            {showCart ? (
              false
            ) : (
              <FaShoppingCart
                className="iconshop"
                onClick={handleGoToCart}
                style={{ cursor: "pointer", fontSize: "24px" }}
              />
            )}
          </div>
        </div>
      </header>

      <main>
        {showCart ? (
          <ShoppingCart
            cartItems={cartItems}
            setCartItems={setCartItems}
            handleCloseCart={handleCloseCart}
          />
        ) : (
          <Products cartItems={cartItems} setCartItems={setCartItems} />
        )}
      </main>
    </>
  );
};

export default App;
