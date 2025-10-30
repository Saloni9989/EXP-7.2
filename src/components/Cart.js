import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, e) => {
    const qty = parseInt(e.target.value);
    if (qty > 0) {
      dispatch(updateQuantity({ id, quantity: qty }));
    }
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty 🛍️</p>;
  }

  return (
    <div>
      <h2>Your Cart ({totalQuantity} items)</h2>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-card">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <label>
              Quantity:
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, e)}
              />
            </label>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
