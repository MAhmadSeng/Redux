// "use client";
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart } from "@/redux/cartSlice";

// function CartPage() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cart);
//   const totalPrice = useSelector((state) => state.cart.totalPrice);

//   return (
//     <div className="min-h-screen p-8">
//       <h1 className="text-4xl font-bold mb-6 text-center">🛒 Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.images}
//                   alt={item.title}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.title}</h2>
//                   <p className="text-gray-600">${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => dispatch(removeFromCart(item))}
//                 className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="text-right text-xl font-bold">
//             Total: ${totalPrice.toFixed(2)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartPage;

"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"; // Adjust path if needed

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="text-right text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
