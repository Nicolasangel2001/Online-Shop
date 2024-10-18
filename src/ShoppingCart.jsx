import React from "react";
import "./Cart.css";

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDelete = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const handleEdit = (index) => {
    const newQuantity = prompt(
      "Ingrese la nueva cantidad:",
      cartItems[index].quantity
    );
    if (newQuantity && !isNaN(newQuantity) && newQuantity > 0) {
      const updatedItems = [...cartItems];
      updatedItems[index].quantity = parseInt(newQuantity, 10);
      setCartItems(updatedItems);
    }
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="product-grid">
          {cartItems.map((item, index) => (
            <div key={index} className="product-box">
              <h3>{item.name}</h3>
              <div className="cart-item">
                <p className="cantidad">Cantidad: {item.quantity}</p>
                <p className="precio">Precio unidad: ${item.price}</p>

                <button
                  onClick={() => handleEdit(index)}
                  className="edit-button"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="delete-button"
                >
                  Borrar
                </button>
                <p className="subtotal">
                  Subtotal: ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
          <h3 className="Total">Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
