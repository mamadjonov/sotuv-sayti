import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const { cartItems } = useContext(AppContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const YOUR_BOT_TOKEN = "8597992587:AAFa3bdP_yDIfQIR96xqvFc2mAOh8Z3yeGY";
    const YOUR_CHAT_ID = "7545700683";

    let message = `🌟 Yangi zakaz 🌟\n`;
    message += `Ism: ${name}\nTelefon: ${phone}\nManzil: ${address}\n\nMahsulotlar:\n`;
    cartItems.forEach(item => {
      message += `- ${item.name} (${item.quantity} x ${item.price})\n`;
    });
    const total = cartItems.reduce(
      (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );
    message += `\nUmumiy narx: $${total.toFixed(2)}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${YOUR_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: YOUR_CHAT_ID,
          text: message
        })
      });
      const data = await res.json();
      if (data.ok) {
        toast.success("Zakaz yuborildi!");
        // Formani tozalash
        setName("");
        setPhone("");
        setAddress("");
      } else {
        toast.error("Xatolik: Zakaz yuborilmadi!");
      }
    } catch (err) {
      toast.error("Server bilan bog‘lanib bo‘lmadi!");
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:w-1/2 w-full mx-auto bg-white p-6 rounded-2xl shadow-md">
        

        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Ismingiz"
          className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />

        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Telefon"
          type="number"
          className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />

        <input
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="Manzil"
          className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
        >
          Zakaz berish
        </button>
      </form>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default Form;
