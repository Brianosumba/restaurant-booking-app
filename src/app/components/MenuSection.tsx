export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#FFFCF8] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#3A2418]">
          Our Menu
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
            <div className="h-40 bg-[#B65A3C]/20 border-b border-[#F1D8C8]"></div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-[#3A2418]">
                Ugali na Sukuma Wiki
              </h3>
              <p className="text-sm leading-6 text-[#5C4033]">
                A traditional East African dish made with maize flour and leafy
                greens.
              </p>
              <span className="text-base font-semibold text-[#B65A3C]">
                120kr
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
            <div className="h-40 bg-[#B65A3C]/20 border-b border-[#F1D8C8]"></div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-[#3A2418]">Nyama Choma</h3>
              <p className="text-sm leading-6 text-[#5C4033]">
                Grilled meat seasoned with traditional East African spices.
              </p>
              <span className="text-base font-semibold text-[#B65A3C]">
                150kr
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
            <div className="h-40 bg-[#B65A3C]/20 border-b border-[#F1D8C8]"></div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-[#3A2418]">
                Chapati & Nyama
              </h3>
              <p className="text-sm leading-6 text-[#5C4033]">
                Soft flatbread served with tender grilled meat and aromatic
                sauces.
              </p>
              <span className="text-base font-semibold text-[#B65A3C]">
                130kr
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
