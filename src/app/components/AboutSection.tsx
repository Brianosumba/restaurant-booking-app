import Image from "next/image";

const aboutHighlights = [
  {
    label: "Kenya & Tanzania",
    text: "Inspired flavours",
  },
  {
    label: "Karibu spirit",
    text: "Warm hospitality",
  },
  {
    label: "Stockholm",
    text: "Made locally",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FFF8F1] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-[#B65A3C]">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#3A2418] sm:text-4xl">
              A warm taste of East Africa in Stockholm
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#5C4033]">
              Karibu means welcome and that is the heart of everything we do.
              Inspired by the kitchens of Kenya and Tanzania, we bring warm
              spices, comforting dishes, and East African hospitality to the
              heart of Stockholm.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#5C4033]">
              From shared plates to familiar aromas, every detail is designed to
              make guests feel at home while discovering something new.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {aboutHighlights.map((highlight) => (
                <div
                  className="rounded-2xl border border-[#E7D3C3] bg-white/70 p-4"
                  key={highlight.label}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
                    {highlight.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#3A2418]">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 rounded-3xl border border-[#E7D3C3] bg-white p-6 shadow-sm">
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="/images/about/about-east-african-hospitality.png"
                alt="Shared East African dining table at Karibu Kitchen"
                fill
                className="object-cover object-[center_55%]"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <h3 className="text-xl font-bold text-[#3A2418]">
              Inspired by the warmth of home
            </h3>
            <p className="text-sm leading-6 text-[#5C4033]">
              A place where East African flavours, warm service, and shared
              moments come together around the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
