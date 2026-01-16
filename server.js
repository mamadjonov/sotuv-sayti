import express from "express";
import cors from "cors";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

app.post("/send-order", (req, res) => {
  const { name, phone, address, cartItems } = req.body;

  if (!name || !phone || !address || !cartItems) {
    return res.status(400).json({ error: "Ma'lumot yetarli emas" });
  }

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

  bot.sendMessage(process.env.CHAT_ID, message)
     .then(() => res.json({ success: true }))
     .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(process.env.PORT, () => console.log(`Server ishga tushdi: ${process.env.PORT}`));