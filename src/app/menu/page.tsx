import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItemCard from "../components/MenuItemCard";

const menuItems = [
  {
    name: "Nyama Choma",
    description: "Grilled meat served with traditional sides.",
    price: "130kr",
  },
  {
    name: "Ugali na Sukuma Wiki",
    description:
      "A comforting East African classic with maize meal and sautéed greens.",
    price: "120kr",
  },
  {
    name: "Pilau Rice",
    description: "Fragrant spiced rice cooked with warm coastal flavors.",
    price: "145kr",
  },
];

export default function Menu() {
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

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[#B65A3C] px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
              >
                Signature Dishes
              </button>
              <button
                type="button"
                className="rounded-full border border-[#F1D8C8] px-4 py-2 text-sm font-semibold text-[#3A2418] hover:bg-[#FFF8F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
              >
                Grilled Favorites
              </button>
              <button
                type="button"
                className="rounded-full border border-[#F1D8C8] px-4 py-2 text-sm font-semibold text-[#3A2418] hover:bg-[#FFF8F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
              >
                Stews & Comfort
              </button>
              <button
                type="button"
                className="rounded-full border border-[#F1D8C8] px-4 py-2 text-sm font-semibold text-[#3A2418] hover:bg-[#FFF8F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
              >
                Sides
              </button>
              <button
                type="button"
                className="rounded-full border border-[#F1D8C8] px-4 py-2 text-sm font-semibold text-[#3A2418] hover:bg-[#FFF8F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
              >
                Drinks
              </button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {menuItems.map((item) => (
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
