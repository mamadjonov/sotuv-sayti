import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Savat from "./savat";
import { AppContext } from "./AppContext";


import antijirkeramika from "./assets/antijirkeramika.jpg";
import antijirqozon from "./assets/antijirqozon.jpg";
import antijiruniversal from "./assets/antijiruniversal.jpg";
import antizasor from "./assets/antizasor.jpg";
import chistoldengiz from "./assets/chistoldengiz.jpg";
import chistollimon from "./assets/chistollimon.jpg";
import chistololma from "./assets/chistololma.jpg";
import fruktoshakok from "./assets/fruktoshakok.jpg";
import fruktoshaqizil from "./assets/fruktoshaqizil.jpg";
import gel1 from "./assets/gel1.jpg";
import gel250 from "./assets/gel250.jpg";
import gel300 from "./assets/gel300.jpg";
import gelaroma from "./assets/gelaroma.jpg";
import gelpolavtomat from "./assets/gelpolavtomat.jpg";
import gelsiyohrang from "./assets/gelsiyohrang.jpg";
import kapsula25 from "./assets/kapsula25.jpg";
import kapsula30 from "./assets/kapsula30.jpg";
import kislorod from "./assets/kislorod.jpg";
import oq from "./assets/oq.jpg";
import oynadengiz from "./assets/oynadengiz.jpg";
import oynakokosmevalar from "./assets/oynakokosmevalar.jpg";
import oynalimon from "./assets/oynalimon.jpg";
import oynameva from "./assets/oynameva.jpg";
import oynaolma from "./assets/oynaolma.jpg";
import shamponaloe from "./assets/shamponaloe.jpg";
import shamponkokos from "./assets/shamponkokos.jpg";
import shamponqora from "./assets/shamponqora.jpg";
import shampunyongok from "./assets/shampunyongok.jpg";
import suyuqsovun from "./assets/suyuqsovun.jpg";
import utonokqizil from "./assets/utonokqizil.jpg";
import utonoksariq from "./assets/utonoksariq.jpg";
import yumushbinafsha from "./assets/yumushbinafsha.jpg";
import yumushkok from "./assets/yumushkok.jpg";
import yumushsiyohrang from "./assets/yumushsiyohrang.jpg";



const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState(""); // ❗ YETISHMAYOTGAN QATOR

  // 🔹 ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };


  const products = [
    {
      id: 1,
      name: "Yog'ni erituvchi suyuqlik (антижир)",
      price: "20 000",
      image: antijirkeramika,
      description: "Keramika uchun yog'ga qarshi suyuqlik",
      bigdescription:
        "Keramika va biokeramikadagi yog'larni tez erituvchi va tozalovchi vosita. ",
    },
    { id: 2, name: "Yog'ni erituvchi suyuqlik (антижир)", price: "20 000", image: antijirqozon, description: "Qozon uchun yog'ga qarshi suyuqlik", bigdescription: "Qozon,tova va shunga oxshash idishlardan yog'larni tez erituvchi va tozalovchi vosita. " },
    { id: 3, name: "Yog'ni erituvchi suyuqlik (антижир)", price: "20 000", image: antijiruniversal, description: "Universal yog'ga qarshi suyuqlik", bigdescription: "Universal yog'larni tez erituvchi va tozalovchi vosita, kam kuchlanishda bolgani uchun hamma turdagi idishlarga togri keladi." },
    { id: 4, name: "Antizasor", price: "30 000", image: antizasor, description: "Rakovina trubasidagi mog'orlarni tozolovchi vosita",
       bigdescription: "  Rakovina trubasidagi mog'orlarni, iflosliklarni va yomon hidlarni tezda tozalovchi vosita bolib vannadagi trubalarni ham tozalashda qol keladi." 
    },
    {
      id: 5,
      name: "Dengiz iforli Chistol",
      price: "10 000",
      image: chistoldengiz,
      description: "Dengiz iforli Chistol – uy va oshxona yuzalarini tez va samarali tozalash vositasi.",
      bigdescription: "Dengiz iforli Chistol – har qanday yuzani, jumladan oshxona va uy yuzalarini tez va samarali tozalash uchun mo‘ljallangan. Maxsus dengiz ifori bilan tozalash jarayoni yoqimli va tetiklantiruvchi. Qalin va qattiq kirlarni yumshoq va samarali olib tashlaydi, yuzalarni toza va tarang qiladi. Kimyoviy zarar minimal, ishlatish oson va tez quriydi."
    },
    
    {
      id: 6,
      name: "Limon iforli Chistol",
      price: "10 000",
      image: chistollimon,
      description: "Limon iforli Chistol – uy va oshxona yuzalarini tez va samarali tozalash vositasi, yoqimli sitrus hidi bilan.",
      bigdescription: "Limon iforli Chistol – har qanday uy va oshxona yuzalarini samarali tozalash uchun mo‘ljallangan. Maxsus limon ifori tozalash jarayonini yoqimli va tetiklantiruvchi qiladi. Qalin va qattiq kirlarni yumshoq va samarali olib tashlaydi, yuzalarni toza va tarang qiladi. Tabiiy sitrus hidi bilan atrofni yangi va toza qiladi, kimyoviy zarar minimal. Ishlatish oson va tez quriydi."
    },    
    { 
      id: 7, 
      name: "Olma iforli Chistol", 
      price: "10 000", 
      image: chistololma, 
      description: "Olma iforli Chistol – uy va oshxona yuzalarini samarali tozalash vositasi, yoqimli mevali hidi bilan.", 
      bigdescription: "Olma iforli Chistol – har qanday uy va oshxona yuzalarini samarali tozalash uchun mo‘ljallangan. Maxsus olma ifori tozalash jarayonini yoqimli va tetiklantiruvchi qiladi. Qalin va qattiq kirlarni yumshoq va samarali olib tashlaydi, yuzalarni toza va tarang qiladi. Tabiiy mevali hidi bilan atrofni yangi va toza qiladi, kimyoviy zarar minimal. Ishlatish oson va tez quriydi." 
    },
    { id: 8, name: "Bolalar shampuni", price: "15 000", image: fruktoshakok, description: "Kozni achishtirmaydigan bolalar shampun.", bigdescription: "Kozni achishtirmaydigan bolalar shampunui,shirin mevalar iforli."},
    { id: 9, name: "Bolalar shampuni", price: "15 000", image: fruktoshaqizil, description: "Kozni achishtirmaydigan bolalar shampun.", bigdescription: "Kozni achishtirmaydigan bolalar shampunui,shirin mevalar iforli." },
    { id: 10, name: "Idish yuvish uchun gel (700gr)", price: "15 000", image: gel1, description: "Hushboy hidli idish yuvish uchun gel.", bigdescription: "Hushboy hidli idish yuvish uchun gel." },
    { id: 11, name: "Idish yuvish uchun gel (150gr)", price: "3 500", image: gel250, description: "Hushboy hidli idish yuvish uchun gel.", bigdescription: "Hushboy hidli idish yuvish uchun gel." },
    { id: 12, name: "Idish yuvish uchun gel (200gr)", price: "5 000", image: gel300, description: "Hushboy hidli idish yuvish uchun gel.", bigdescription: "Hushboy hidli idish yuvish uchun gel." },
    { id: 13, name: "Avtomat kir mashinasi uchun gel", price: "75 000", image: gelaroma, description: "Tozalik va hushboylik beruvchi gippoallergen kir yuvish vositasi.", bigdescription: "Tozalik va hushboylik beruvchi gippoalergen kir yuvish vositasi." },
    { id: 14, name: "Universal, kir yuvish uchun gel", price: "55 000", image: gelpolavtomat, description: "Tozalik va hushboylik beruvchi kir yuvish vositasi.", bigdescription: "Tozalik va hushboylik beruvchi kir yuvish vositasi." },
    { id: 15, name: "Avtomat kir yuvish mashinasi uchun gel", price: "65 000", image: gelsiyohrang, description: "Tozalik va hushboylik beruvchi kir yuvish vositasi.", bigdescription: "Tozalik va hushboylik beruvchi kir yuvish vositasi." },
    { id: 16, name: "Kapsula (25ta)", price: "60 000", image: kapsula25, description: "Tozalovchi,hushboylik beruvchi,yumshatuvchi kapsula.", bigdescription: "Tozalovchi,hushboylik beruvchi,yumshatuvchi kapsula." },
    { id: 17, name: "Kapsula (30ta)", price: "75 000", image: kapsula30, description: "Tozalovchi,hushboylik beruvchi,yumshatuvchi kapsula.", bigdescription: "Tozalovchi,hushboylik beruvchi,yumshatuvchi kapsula." },
    { id: 18, name: "Kislorodli tozalovchi", price: "25 000", image: kislorod, description: "Kiyimdagi dog'larni samarali ketgazuvchi vosita.", bigdescription: "Kiyimdagi dog'larni samarali ketgazuvchi vosita." },
    { id: 19, name: "Oqartiruvchi", price: "10 000", image: oq, description: "Xlorli, kiyimlarni oqartiruvchi vosita.", bigdescription: "Xlorli, kiyimlarni oqartiruvchi vosita." },
    { id: 20, name: "Oyna yuvish vositasi", price: "10 000", image: oynadengiz, description: "Oynalarni yuvish uchun suyuqlik hushboy dengiz iforli. ", bigdescription: "Oynalarni yuvish uchun suyuqlik hushboy dengiz iforli. " },
    { id: 21, name: "Oyna yuvish vositasi", price: "10 000", image: oynakokosmevalar, description: "Oynalarni yuvish uchun suyuqlik hushboy tropik mevalari iforli.", bigdescription: "Oynalarni yuvish uchun suyuqlik hushboy o'rmon mevalari iforli." },
    { id: 22, name: "Oyna yuvish vositasi", price: "10 000", image: oynalimon, description: "Oynalarni yuvish uchun suyuqlik hushboy limon iforli.", bigdescription: "Oynalarni yuvish uchun suyuqlik hushboy limon iforli." },
    { id: 23, name: "Oyna yuvish vositasi", price: "10 000", image: oynameva, description: "Oynalarni yuvish uchun suyuqlik hushboy o'rmon mevalari iforli.", bigdescription: "Oynalarni yuvish uchun suyuqlik hushboy o'rmon mevalari iforli." },
    { id: 24, name: "Oyna yuvish vositasi", price: "10 000", image: oynaolma, description: "Oynalarni yuvish uchun suyuqlik hushboy  olma iforli.", bigdescription: "Oynalarni yuvish uchun suyuqlik hushboy  olma iforli." },
    { id: 25, name: "Shampun aloe ekstraktli", price: "40 000", image: shamponaloe, description: "Tarkibida aloe ekstrakti mavjud bolgan yog'li sochlar uchun shampun.", bigdescription: "Tarkibida aloe ekstrakti mavjud bolgan yog'li sochlar uchun shampun." },
    { id: 26, name: "Shampun", price: "40 000", image: shamponkokos, description: "Barcha turdagi sochlarga mos keluvchi shampun.", bigdescription: "Barcha turdagi sochlarga mos keluvchi shampun." },
    { id: 27, name: "Shampun Collagen", price: "40 000", image: shamponqora, description: "Tarkibida collagen mavjud bolgan quruq sochlar uchun shampun.", bigdescription: "Tarkibida collagen mavjud bolgan quruq sochlar uchun shampun." },
    { id: 28, name: "Shampun", price: "40 000", image: shampunyongok, description: "Tarkibida argan moyi mavjud bolgan quruq sochlar uchun shampun.", bigdescription: "Tarkibida argan moyi mavjud bolgan quruq sochlar uchun shampun." },
    { id: 29, name: "Suyuq hojalik sovuni", price: "25 000", image: suyuqsovun, description: "kiyim-kechak va matolarni yuvish uchun mo‘ljallangan samarali tozalovchi vosita.", bigdescription: "kiyim-kechak va matolarni yuvish uchun mo‘ljallangan samarali tozalovchi vosita. U yog‘li dog‘lar, qattiq kirlar va kundalik iflosliklarni oson ketkazadi." },
    { id: 30, name: "Tozolov vositasi", price: "20 000", image: utonokqizil, description: "hojathona va unitazlarni chuqur tozalash uchun mo‘ljallangan kuchli samarali vosita.", bigdescription: "hojathona va unitazlarni chuqur tozalash uchun mo‘ljallangan kuchli samarali vosita. Maxsus egri shakldagi qopqog‘i tufayli unitazning eng qiyin yetiladigan joylariga ham oson kirib boradi." },
    { id: 31, name: "Tozolov vositasi", price: "20 000", image: utonoksariq, description: "hojathona va unitazlarni chuqur tozalash uchun mo‘ljallangan kuchli samarali vosita.", bigdescription: "hojathona va unitazlarni chuqur tozalash uchun mo‘ljallangan kuchli samarali vosita. Maxsus egri shakldagi qopqog‘i tufayli unitazning eng qiyin yetiladigan joylariga ham oson kirib boradi." },
    { id: 32, name: "Sochiqlarni yumshatuvchi vosita", price: "50 000", image: yumushbinafsha, description: "sochiqlar va boshqa matolarni yuvishdan so‘ng yumshoq, yoqimli va parvarishlangan holatda saqlaydi.", bigdescription: "sochiqlar va boshqa matolarni yuvishdan so‘ng yumshoq, yoqimli va parvarishlangan holatda saqlash uchun mo‘ljallangan maxsus yumshatuvchi vosita. U mato tolalarini ehtiyotkorlik bilan parvarish qiladi va uzoq muddat yumshoqlikni ta’minlaydi." },
    { id: 33, name: "Sochiqlarni yumshatuvchi vosita", price: "50 000", image: yumushkok, description: "sochiqlar va boshqa matolarni yuvishdan so‘ng yumshoq, yoqimli va parvarishlangan holatda saqlaydi.", bigdescription: "sochiqlar va boshqa matolarni yuvishdan so‘ng yumshoq, yoqimli va parvarishlangan holatda saqlash uchun mo‘ljallangan maxsus yumshatuvchi vosita. U mato tolalarini ehtiyotkorlik bilan parvarish qiladi va uzoq muddat yumshoqlikni ta’minlaydi." },
    { id: 34, name: "Sochiqlarni yumshatuvchi vosita", price: "50 000", image: yumushsiyohrang, description: "sochiqlar va boshqa matolarni yuvishdan so‘ng yumshoq, yoqimli va parvarishlangan holatda saqlaydi.", bigdescription: "sochiqlar va boshqa matolarni yuvishdan so‘ng yumshoq, yoqimli va parvarishlangan holatda saqlash uchun mo‘ljallangan maxsus yumshatuvchi vosita. U mato tolalarini ehtiyotkorlik bilan parvarish qiladi va uzoq muddat yumshoqlikni ta’minlaydi." },
  ];

 
   // 🔹 SEARCH FILTER
   const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <AppContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      <Navbar />

      <Routes>
        {/* MARKET PAGE */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100">
              {/* SEARCH */}
              <div className="max-w-7xl mx-auto p-6 flex justify-center">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Mahsulot qidirish..."
                  className="w-full md:w-1/2 border border-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* PRODUCTS */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="bg-white rounded-2xl shadow hover:shadow-xl cursor-pointer flex flex-col">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-square object-cover rounded-t-2xl"
                      onClick={() => setSelectedProduct(p)}
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h2 className="font-bold text-lg">{p.name}</h2>
                      <p className="text-gray-500 text-sm">{p.description}</p>
                      <p className="text-blue-600 mb-3 font-bold mt-3">{p.price} so'm</p>
                      <button
                        onClick={() => addToCart(p)}
                        className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
                      >
                        Savatga qo‘shish
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* MODAL */}
              {selectedProduct && (
                <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-slideUp">
                  <div className="sticky top-0 bg-white z-50 shadow">
                    <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                      <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
                      <button onClick={() => setSelectedProduct(null)} className="text-3xl text-gray-600 hover:text-black">
                        ✕
                      </button>
                    </div>
                  </div>

                  <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full max-h-[80vh] object-contain bg-gray-100 rounded-2xl" />
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{selectedProduct.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{selectedProduct.bigdescription}</p>
                      <p className="text-3xl text-blue-600 font-bold mb-8">{selectedProduct.price}</p>
                      <button
                        onClick={() => addToCart(selectedProduct)}
                        className="w-full bg-blue-600 text-white py-4 rounded-2xl text-lg hover:bg-blue-700"
                      >
                        Savatga qo‘shish
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          }
        />

        {/* SAVAT PAGE */}
        <Route path="/savat" element={<Savat />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;