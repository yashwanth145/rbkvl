"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Milk & Curd",
  "Ghee & Butter",
  "Paneer & Cheese",
  "Flavored Milks",
  "Chocolates",
  "Baked Items",
  "Instant Mixes",
  "Ice - Creams",
  "Milk Powder",
  "Namkeens",
  "Sweets",
];

const products = [
  { id: 1, name: "MILK", category: "Milk & Curd", img: "/milk.png" },
  { id: 2, name: "CURD", category: "Milk & Curd", img: "/curd.png" },
  { id: 3, name: "PURE GHEE", category: "Ghee & Butter", img: "/ghee.png" },
  { id: 4, name: "BUTTER", category: "Ghee & Butter", img: "/butter.png" },
  { id: 5, name: "PANEER", category: "Paneer & Cheese", img: "/panner.png" },
  { id: 6, name: "CHEESE", category: "Paneer & Cheese", img: "/cheese.png" },
  { id: 7, name: "FLAVOURED MILK IN BOTTLES", category: "Flavored Milks", img: "/favouredmilks.png" },
  { id: 8, name: "PET BOTTLES", category: "Flavored Milks", img: "/pet.png" },
  { id: 9, name: "CHOCOLATES", category: "Chocolates", img: "/chocolates.png" },
  { id: 10, name: "RUSK", category: "Baked Items", img: "/rusk.png" },
  { id: 11, name: "COOKIES", category: "Baked Items", img: "/cookies.png" },
  { id: 12, name: "BREAD AND BUN", category: "Baked Items", img: "/bread.png" },
  { id: 13, name: "NAMKEENS", category: "Namkeens", img: "/namkeens.png" },
  { id: 14, name: "INSTANT MILK", category: "Instant Mixes", img: "/instantmilk.png" },
  { id: 15, name: "FROZEN FOODS", category: "Ice - Creams", img: "/frozenfoods.png" },
  { id: 16, name: "NATURAL ICE-CREAM", category: "Ice - Creams", img: "/naturalicecream.png" },
  { id: 17, name: "CASSATA", category: "Ice - Creams", img: "/cassata.png" },
  { id: 18, name: "SUNDAE", category: "Ice - Creams", img: "/sundae.png" },
  { id: 19, name: "FAMILY PACK ICE-CREAM", category: "Ice - Creams", img: "/familyicecream.png" },
  { id: 20, name: "CHOCO BAR", category: "Ice - Creams", img: "/chocobar.png" },
  { id: 21, name: "CONE ICE-CREAM", category: "Ice - Creams", img: "/coneicecream.png" },
  { id: 22, name: "CUP ICE-CREAMS", category: "Ice - Creams", img: "/cupicecream.png" },
  { id: 24, name: "GUDBUD", category: "Ice - Creams", img: "/gudbud.png" },
  { id: 25, name: "ICE CREAM MOCKUPS", category: "Ice - Creams", img: "/mockups.png" },
  { id: 26, name: "SWEETS", category: "Sweets", img: "/sweets.png" },
  { id: 27, name: "MILK POWDER", category: "Milk Powder", img: "/milkpowder.png" },
  { id: 28, name: "NANDINI GOOD LIFE MILK", category: "Milk & Curd", img: "/goodlife.png" },
      { id: 29, name: "FLAVOURED MILK", category: "Flavored Milks", img: "/flavouredmilk.png" },
        { id: 23, name: "CARAMEL ICE CREAM", category: "Ice - Creams", img: "/naturalicecream.png" },


];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center text-5xl md:text-6xl font-extrabold text-blue-900 tracking-widest"
      >
        RBKVMUL PRODUCTS
      </motion.h1>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex gap-1 md:gap-6 whitespace-nowrap overflow-x-auto justify-center mt-5 scrollbar-hide"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className="relative py-1 px-1 text-sm transition-colors"
          >
            <span
              className={`${
                activeCategory === cat
                  ? "text-blue-800 font-bold italic"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {cat}
            </span>
            {activeCategory === cat && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-800 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Product Grid */}
      <motion.div
        layout
        className="max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 mt-20"
      >
        <AnimatePresence mode="wait">
          {filteredProducts.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-64 h-64"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="object-contain drop-shadow-2xl
                      group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]
                      transition-shadow duration-700"
                  />
                </motion.div>
              </div>

              {/* Name */}
              <div className="py-6 text-center">
                <p className="text-2xl md:text-xl font-semibold italic tracking-wide text-gray-900 group-hover:text-blue-700 transition-colors">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}