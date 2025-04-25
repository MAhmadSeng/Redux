"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value);
    if (newQty > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg mb-4">
      <div className="flex items-center gap-4">
        <img
          src={item.images}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-600">${item.price}</p>
          <div className="mt-2">
            <label className="mr-2 font-medium">Qty:</label>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="w-16 border px-2 py-1 rounded text-center"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(item))}
        className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
