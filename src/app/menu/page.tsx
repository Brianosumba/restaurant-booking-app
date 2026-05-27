"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItemCard from "../components/MenuItemCard";
import { menuItems, menuCategories } from "../data/menu";
import MenuCategoryTabs from "../components/MenuCategoryTabs";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Signature Dishes");
  const filteredMenuItems = menuItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <>
      <Header />
      <main>
        <section className="bg-[#FFFCF8] px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#3A2418]">
              Our Menu
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5C4033]">
              Discover our delicious selection of dishes and beverages.
            </p>

            <MenuCategoryTabs
              categories={menuCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {filteredMenuItems.map((item) => (
                <MenuItemCard
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
