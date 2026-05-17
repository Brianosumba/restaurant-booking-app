import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="px-4 py-4 sticky top-0 z-50 bg-[#FFFCF8] border-b border-[#F1D8C8] sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#B65A3C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 8c0-1 1-1 1-2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 7c0-1 1-1 1-2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 8c0-1 1-1 1-2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13c-2 0-2 3 0 3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 13c2 0 2 3 0 3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 11h12l-2 7H8l-2-7z"
                />
              </svg>
              <span className="inline-flex items-baseline gap-1 text-xl font-extrabold tracking-[-0.04em] text-[#3A2418]">
                <span className="font-[family-name:var(--font-kaushan-script)] tracking-normal">
                  Karibu
                </span>
                <span className="text-sm font-semibold tracking-[0.08em] uppercase">
                  Kitchen
                </span>
              </span>
            </span>
          </Link>
          <button className="rounded-full bg-[#B65A3C] px-4 py-2 text-sm font-medium text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2">
            Book a Table
          </button>
        </div>
      </header>

      <main>
        <section>
          <div className="min-h-[70vh] bg-[#3A2418] text-white flex flex-col items-center justify-center gap-4">
            <div className="max-w-xl px-4 py-16 sm:py-20 text-center flex flex-col items-center gap-4">
              <p className="text-5xl font-[family-name:var(--font-kaushan-script)] text-[#FFFCF8]">
                Karibu!
              </p>
              <p className="text-sm font-medium tracking-[0.14em] uppercase text-[#D99A3D]">
                Welcome to Karibu Kitchen.
              </p>
              <p className="max-w-md text-base leading-7 text-white/85">
                Warm spices. Bold flavors. East African hospitality.
              </p>
              <div className="flex flex-col gap-3 items-center sm:flex-row">
                <a
                  href="#booking"
                  className="rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors"
                >
                  Book a Table
                </a>
                <a
                  href="#menu"
                  className="rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#3A2418] transition-colors"
                >
                  View Menu
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-3xl px-4 py-14 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#3A2418]">
              Discover the taste of Kenya and Tanzania
            </h1>
            <p className="mt-4 text-base leading-7 text-[#5C4033]">
              Karibu Kitchen brings together comforting stews, vibrant spices,
              grilled favorites, and warm hospitality inspired by the kitchens
              of Kenya and Tanzania.
            </p>
          </div>
        </section>

        <section className="bg-[#FFF8F1] px-4 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#3A2418]">
              Quick Info
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFFCF8] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
                  Opening Hours
                </h3>
                <p className="text-base font-medium text-[#3A2418]">
                  09:00 AM - 11:00 PM
                </p>
              </li>
              <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFFCF8] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
                  Location
                </h3>
                <p className="text-base font-medium text-[#3A2418]">
                  123 Main Street, Nairobi
                </p>
              </li>
              <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFFCF8] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
                  Contact
                </h3>
                <p className="text-base font-medium text-[#3A2418]">
                  +254 700 123 456
                </p>
              </li>
            </ul>
          </div>
        </section>

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
                    A traditional East African dish made with maize flour and
                    leafy greens.
                  </p>
                  <span className="text-base font-semibold text-[#B65A3C]">
                    120kr
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
                <div className="h-40 bg-[#B65A3C]/20 border-b border-[#F1D8C8]"></div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#3A2418]">
                    Nyama Choma
                  </h3>
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
      </main>
    </>
  );
}
