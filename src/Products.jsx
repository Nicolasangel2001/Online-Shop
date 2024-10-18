import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle, FaShoppingCart } from "react-icons/fa";
import "./Products.css";
import camisacol from "../src/Images/camisa.png";

const Products = ({ setCartItems }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (product) => {
    const productWithQuantity = { ...product, quantity };
    setCartItems((prevItems) => [...prevItems, productWithQuantity]);
  };

  const products = [
    {
      id: 1,
      name: "Camisa-Col",
      price: 100000,
      description: "Descripción: Camisa - Colombia - Talla XL",
    },
  ];

  return (
    <div className="products-container">
      <h2>Productos</h2>
      <div className="product-grids">
        {products.map((product) => (
          <div key={product.id} className="product-boxs">
            <p className="precios">Precio: ${product.price}</p>
            <img src={camisacol} alt="Producto" className="product-image" />
            <h3>{product.name}</h3>
            <div className="quantity">
              <FaMinusCircle
                onClick={decrementQuantity}
                className="minus-icon"
              />
              <p className="cantidad">Cant. {quantity}</p>
              <FaPlusCircle onClick={incrementQuantity} className="plus-icon" />
              <FaShoppingCart
                className="cart-icon"
                onClick={() => handleAddToCart(product)}
              />
            </div>
            <div className="product-info">{product.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
