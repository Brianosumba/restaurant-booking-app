export default function QuickInfoSection() {
  return (
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
              15:00 - 23:00
            </p>
          </li>
          <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFFCF8] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
              Location
            </h3>
            <p className="text-base font-medium text-[#3A2418]">
              Södermalm, Stockholm
            </p>
          </li>
          <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFFCF8] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
              Contact
            </h3>
            <p className="text-base font-medium text-[#3A2418]">
              +46 70 123 45 67
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
