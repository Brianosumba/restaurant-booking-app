import React from "react";

type BookingForm = {
  date: string;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
};

type BookingStepFieldsProps = {
  bookingStep: string;
  bookingForm: BookingForm;
  setBookingForm: React.Dispatch<React.SetStateAction<BookingForm>>;
  setBookingError: React.Dispatch<React.SetStateAction<string>>;
  goToTimeStep: () => void;
  goToGuestsStep: () => void;
  goToContactStep: () => void;
};

export default function BookingStepFields({
  bookingStep,
  bookingForm,
  setBookingForm,
  setBookingError,
  goToTimeStep,
  goToGuestsStep,
  goToContactStep,
}: BookingStepFieldsProps) {
  return (
    <>
      {bookingStep === "date" && (
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-sm font-medium text-[#3A2418]">
            Date:
          </label>
          <input
            value={bookingForm.date}
            type="date"
            id="date"
            required
            className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            onChange={(event) => {
              setBookingForm({ ...bookingForm, date: event.target.value });
              setBookingError("");
            }}
          />
          <button
            type="button"
            className="w-full sm:w-auto rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
            onClick={goToTimeStep}
          >
            Continue
          </button>
        </div>
      )}

      {bookingStep === "time" && (
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="text-sm font-medium text-[#3A2418]">
            Time:
          </label>
          <select
            id="time"
            value={bookingForm.time}
            required
            className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            onChange={(event) => {
              setBookingForm({ ...bookingForm, time: event.target.value });
              setBookingError("");
            }}
          >
            <option value="">Select a time</option>
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
          <button
            type="button"
            className="w-full sm:w-auto rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
            onClick={goToGuestsStep}
          >
            Continue
          </button>
        </div>
      )}

      {bookingStep === "guests" && (
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
            value={bookingForm.guests}
            min="1"
            max="10"
            required
            className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
            onChange={(event) => {
              setBookingForm({
                ...bookingForm,
                guests: event.target.value,
              });
              setBookingError("");
            }}
          />
          <button
            type="button"
            className="w-full sm:w-auto rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
            onClick={goToContactStep}
          >
            Continue
          </button>
        </div>
      )}

      {bookingStep === "contact" && (
        <>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[#3A2418]"
            >
              Name:
            </label>
            <input
              value={bookingForm.name}
              type="text"
              id="name"
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
              onChange={(event) => {
                setBookingForm({
                  ...bookingForm,
                  name: event.target.value,
                });
                setBookingError("");
              }}
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
              value={bookingForm.email}
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
              onChange={(event) => {
                setBookingForm({
                  ...bookingForm,
                  email: event.target.value,
                });
                setBookingError("");
              }}
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
              value={bookingForm.phone}
              required
              className="rounded-xl border border-[#F1D8C8] bg-white px-4 py-3 text-sm text-[#3A2418] focus:outline-none focus:ring-2 focus:ring-[#D99A3D]"
              onChange={(event) => {
                setBookingForm({
                  ...bookingForm,
                  phone: event.target.value,
                });
                setBookingError("");
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2"
          >
            Confirm Booking
          </button>
        </>
      )}
    </>
  );
}
