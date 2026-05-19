export default function BookingSection() {
  return (
    <section id="booking" className="bg-[#FFF8F1] px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#3A2418]">
          Book a Table
        </h2>
        <p className="mt-3 text-base leading-7 text-[#5C4033]">
          Choose your date, time, and party size. We’ll take care of the rest.
        </p>
        <form className="mt-8 rounded-2xl border border-[#F1D8C8] bg-[#FFFCF8] p-5 shadow-sm grid gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="date"
              className="text-sm font-medium text-[#3A2418]"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="time"
              className="text-sm font-medium text-[#3A2418]"
            >
              Time:
            </label>
            <select
              id="time"
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            >
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="guests"
              className="text-sm font-medium text-[#3A2418]"
            >
              Guests:
            </label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[#3A2418]"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#3A2418]"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-[#3A2418]"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
