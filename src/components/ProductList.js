import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Available Products</h2>
      <div className="product-container">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
            <button onClick={() => dispatch(addToCart(p))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
