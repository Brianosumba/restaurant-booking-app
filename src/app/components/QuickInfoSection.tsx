import { title } from "process";

const quickInfoItems = [
  {
    title: "Opening Hours",
    value: "Open daily · 15:00–23:00",
  },
  {
    title: "Location",
    value: "Södermalm, Stockholm",
  },
  {
    title: "Contact",
    value: "+46 70 123 45 67",
  },
];

export default function QuickInfoSection() {
  return (
    <section className="bg-[#FFF8F1] px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-[0.14em] uppercase text-[#B65A3C]">
          Visit us
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#3A2418]">
          Plan your visit to Karibu Kitchen
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#5C4033]">
          Find our opening hours, location and contact details before your
          visit.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {quickInfoItems.map((item) => (
            <li
              className="rounded-2xl border border-[#F1D8C8] bg-[#FFFCF8] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm"
              key={item.title}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
                {item.title}
              </h3>
              <p className="text-base font-medium text-[#3A2418]">
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
