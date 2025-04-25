"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-base text-black/80 font-medium text-center flex justify-center items-center ">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl font-extrabold text-black/80 text-center">
          All Products
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mx-auto max-w-7xl">
        {products.slice(0, 5).map((itemProduct) => (
          <div
            key={itemProduct.id}
            className="bg-white dark:bg-zinc-100 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col"
          >
            <img
              src={itemProduct.images}
              alt={itemProduct.title}
              className="w-full h-48 object-fit rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-black/80 mb-2">
              {itemProduct.title}
            </h2>
            <p className="text-black/80 text-sm mb-3 line-clamp-2">
              {itemProduct.description}
            </p>
            <div className="flex justify-between items-center mt-auto">
              <p className="text-lg font-semibold text-black/80">
                ${itemProduct.price}
              </p>
              <button
                onClick={() => {
                  console.log("Product Added to Cart:", itemProduct);
                  dispatch(addToCart(itemProduct))}}
                className="bg-blue-500 hover:bg-blue-300 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
