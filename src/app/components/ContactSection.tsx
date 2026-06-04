export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#FFFCF8] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-[0.14em] uppercase text-[#B65A3C]">
          Get in Touch
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#3A2418]">
          Planning a celebration or have a question?
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#5C4033]">
          Whether you are booking a table, planning catering, a birthday,
          wedding, graduation or private dinner, we would love to hear from you.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
              Events & Catering
            </h3>
            <p className="text-base font-medium text-[#3A2418]">
              For birthdays, weddings, graduations and private dinners.
            </p>
          </li>
          <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
              Location
            </h3>
            <p className="text-base font-medium text-[#3A2418]">
              Södermalm, Stockholm
            </p>
          </li>
          <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
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
