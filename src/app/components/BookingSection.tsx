"use client";
import React, { useState } from "react";

export default function BookingSection() {
  const [bookingStep, setBookingStep] = useState("date");
  const [bookingForm, setBookingForm] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
  });
  const [bookingError, setBookingError] = useState("");

  const goToTimeStep = () => {
    if (!bookingForm.date) {
      setBookingError("Please select a date to continue.");
      return;
    }
    setBookingError("");
    setBookingStep("time");
  };

  const goToGuestsStep = () => {
    if (!bookingForm.time) {
      setBookingError("Please select a time to continue.");
      return;
    }
    setBookingError("");
    setBookingStep("guests");
  };

  const goToContactStep = () => {
    if (!bookingForm.guests) {
      setBookingError("Please enter the number of guests.");
      return;
    }
    setBookingError("");
    setBookingStep("contact");
  };

  const goToDateStep = () => {
    setBookingForm({
      date: "",
      time: "",
      guests: "",
      name: "",
      email: "",
      phone: "",
    });
    setBookingError("");
    setBookingStep("date");
  };
  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingStep("confirmation");
  };

  return (
    <section id="booking" className="bg-[#FFF8F1] px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#3A2418]">
          Book a Table
        </h2>
        <p className="mt-3 text-base leading-7 text-[#5C4033]">
          Choose your date, time, and party size. We’ll take care of the rest.
        </p>
        <form
          className="mt-8 rounded-2xl border border-[#F1D8C8] bg-[#FFFCF8] p-5 shadow-sm grid gap-4"
          onSubmit={handleBookingSubmit}
        >
          {bookingError && (
            <p className="rounded-xl border border-[#F1D8C8] bg-[#FFF8F1] px-4 py-3 text-sm font-medium text-[#B65A3C]">
              {bookingError}
            </p>
          )}

          {bookingStep === "date" && (
            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="text-sm font-medium text-[#3A2418]"
              >
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
              <label
                htmlFor="time"
                className="text-sm font-medium text-[#3A2418]"
              >
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

          {bookingStep === "confirmation" && (
            <div className="rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-5 text-center">
              <h3 className="text-xl font-bold text-[#3A2418]">
                Booking confirmed!
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#5C4033]">
                Asante na karibu! Your table has been booked.
              </p>
              <button
                type="button"
                className="mt-4 rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2"
                onClick={goToDateStep}
              >
                Make another booking
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
