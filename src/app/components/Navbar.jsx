import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-white shadow-md w-full h-16 flex items-center justify-between px-4">
      <div>
        <h1 className="text-2xl font-bold">ElegantStyle</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center list-none gap-2 text-gray-800 dark:text-white lg:flex">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900 ">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 "
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/cartpage">
          <button className="bg-blue-500 hover:bg-blue-300 shadow-md text-white px-4 py-2 rounded-md">
            Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
