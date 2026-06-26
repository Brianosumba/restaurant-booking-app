"use client";
import React, { useState } from "react";
import BookingErrorMessage from "./BookingErrorMessage";
import BookingConfirmation from "./BookingConfirmation";
import BookingStepFields from "./BookingStepFields";

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
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#B65A3C]">
          Reservations
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#3A2418] sm:text-4xl">
          Book a Table
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#5C4033]">
          Choose your date, time, and party size. We’ll take care of the rest.
        </p>
        <form
          className="mt-8 grid gap-4 rounded-3xl border border-[#F1D8C8] bg-[#FFFCF8] p-6 shadow-sm sm:p-8"
          onSubmit={handleBookingSubmit}
        >
          {bookingError && <BookingErrorMessage message={bookingError} />}

          <BookingStepFields
            bookingStep={bookingStep}
            bookingForm={bookingForm}
            setBookingForm={setBookingForm}
            setBookingError={setBookingError}
            goToTimeStep={goToTimeStep}
            goToGuestsStep={goToGuestsStep}
            goToContactStep={goToContactStep}
          />

          {bookingStep === "confirmation" && (
            <BookingConfirmation onReset={goToDateStep} />
          )}
        </form>
      </div>
    </section>
  );
}
