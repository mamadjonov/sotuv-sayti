import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import Form from "./Form";

const Savat = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Savat bo‘sh
      </div>
    );

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto bg-gray-100">
      {/* Mahsulotlar ro'yxati */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow p-4 flex gap-4 items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-xl"
            />
            <div className="flex flex-col flex-grow">
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="text-gray-500">{item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded-lg"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Umumiy narx */}
      <div className="mt-6 text-right text-2xl font-bold">
        Umumiy: ${totalPrice.toFixed(2)}
      </div>

      {/* Zakaz berish formasi */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">Zakaz berish</h2>
        <Form cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Savat;
