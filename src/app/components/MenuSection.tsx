import MenuItemCard from "./MenuItemCard";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#FFFCF8] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#3A2418]">
          Our Menu
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <MenuItemCard
            name="Ugali na Sukuma Wiki"
            description="A traditional East African dish made with maize flour and leafy greens."
            price="120kr"
          />
          <MenuItemCard
            name="Nyama Choma"
            description="Grilled meat seasoned with traditional East African spices."
            price="150kr"
          />
          <MenuItemCard
            name="Chapati & Nyama"
            description="Soft flatbread served with tender grilled meat and aromatic sauces."
            price="130kr"
          />
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="/menu"
            className="rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
          >
            View full menu
          </a>
        </div>
      </div>
    </section>
  );
}
