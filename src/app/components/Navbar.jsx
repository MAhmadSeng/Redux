"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";

function Navbar() {
  const cartCount = useSelector((state) => {
    return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
  });
  
  return (
    <div className="bg-white shadow-md w-full h-16 flex items-center justify-between px-4 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">ElegantStyle</h1>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex items-center list-none gap-6 text-black/80">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
        </ul>

        {/* Cart Button */}
        <Link href="/cartpage">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </Link>
        </div>
    </div>
  );
}

export default Navbar;

      {/* <div>
        <Link href="/cartpage">
          <button className="bg-blue-500 hover:bg-blue-300 shadow-md text-white px-4 py-2 rounded-md">
            Cart
          </button>
        </Link>
      </div> */}
