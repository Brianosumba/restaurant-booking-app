import Header from "../components/Header";
import Footer from "../components/Footer";

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
              <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
                <div className="h-44 bg-[#B65A3C]/20 border-b border-[#F1D8C8]"></div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#3A2418]">
                    Nyama Choma
                  </h3>
                  <p className="text-sm leading-6 text-[#5C4033]">
                    Grilled meat served with traditional sides.
                  </p>
                  <span className="text-base font-semibold text-[#B65A3C]">
                    130kr
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
                <div className="h-44 bg-[#B65A3C]/20 border-b border-[#F1D8C8]"></div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#3A2418]">
                    Ugali na Sukuma Wiki
                  </h3>
                  <p className="text-sm leading-6 text-[#5C4033]">
                    A comforting East African classic with maize meal and
                    sautéed greens.
                  </p>
                  <span className="text-base font-semibold text-[#B65A3C]">
                    120kr
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
                <div className="h-44 bg-[#B65A3C]/20 border-b border-[#F1D8C8]"></div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#3A2418]">
                    Pilau Rice
                  </h3>
                  <p className="text-sm leading-6 text-[#5C4033]">
                    Fragrant spiced rice cooked with warm coastal flavors.
                  </p>
                  <span className="text-base font-semibold text-[#B65A3C]">
                    145kr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
