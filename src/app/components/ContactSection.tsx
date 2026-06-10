"use client";
import { useState } from "react";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsContactSubmitted(true);
    setContactForm({
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-[#FFFCF8] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-[#B65A3C]">
              Contact & Events
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#3A2418]">
              Questions, catering or a special celebration?
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5C4033]">
              Whether you have questions about our menu, allergies or opening
              hours, or you’re planning catering, a wedding, graduation,
              birthday or private dinner, we’d love to hear from you.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#B65A3C]/10 text-xs font-bold text-[#B65A3C]">
                  01
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
                  General questions
                </h3>
                <p className="text-base font-medium text-[#3A2418]">
                  Menu, allergies, opening hours or table questions.
                </p>
              </li>
              <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#B65A3C]/10 text-xs font-bold text-[#B65A3C]">
                  02
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
                  Events & catering
                </h3>
                <p className="text-base font-medium text-[#3A2418]">
                  Weddings, birthdays, graduations and private dinners.
                </p>
              </li>
              <li className="rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-5 text-[#3A2418] flex flex-col gap-2 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#B65A3C]/10 text-xs font-bold text-[#B65A3C]">
                  03
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B65A3C]">
                  Group bookings
                </h3>
                <p className="text-base font-medium text-[#3A2418]">
                  Larger dinners with family, friends or colleagues.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#E7D3C3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#3A2418]">
              Send us an inquiry
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#5C4033]">
              Tell us what you’re planning or what you need help with, and our
              team will get back to you.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleContactSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-[#3A2418]"
                >
                  Your name
                </label>
                <input
                  value={contactForm.name}
                  className="w-full rounded-2xl border border-[#E7D3C3] bg-[#FFFCF8] px-4 py-3 text-sm text-[#3A2418] outline-none transition focus:border-[#B65A3C] focus:ring-2 focus:ring-[#B65A3C]/20"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  onChange={(event) =>
                    setContactForm({ ...contactForm, name: event.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#3A2418]"
                >
                  Email address
                </label>
                <input
                  value={contactForm.email}
                  className="w-full rounded-2xl border border-[#E7D3C3] bg-[#FFFCF8] px-4 py-3 text-sm text-[#3A2418] outline-none transition focus:border-[#B65A3C] focus:ring-2 focus:ring-[#B65A3C]/20"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      email: event.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="inquiryType"
                  className="text-sm font-semibold text-[#3A2418]"
                >
                  Inquiry type
                </label>
                <select
                  value={contactForm.inquiryType}
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full rounded-2xl border border-[#E7D3C3] bg-[#FFFCF8] px-4 py-3 text-sm text-[#3A2418] outline-none transition focus:border-[#B65A3C] focus:ring-2 focus:ring-[#B65A3C]/20"
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      inquiryType: event.target.value,
                    })
                  }
                >
                  <option value="">Select inquiry type</option>
                  <option value="general">General questions</option>
                  <option value="events">Events & catering</option>
                  <option value="group">Group bookings</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#3A2418]"
                >
                  Message
                </label>
                <textarea
                  value={contactForm.message}
                  id="message"
                  name="message"
                  placeholder="Tell us what you’re planning or what you need help with"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-[#E7D3C3] bg-[#FFFCF8] px-4 py-3 text-sm text-[#3A2418] outline-none transition focus:border-[#B65A3C] focus:ring-2 focus:ring-[#B65A3C]/20"
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      message: event.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#B65A3C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9F4A31] focus:outline-none focus:ring-2 focus:ring-[#B65A3C]/30 focus:ring-offset-2"
              >
                Send inquiry
              </button>
              {isContactSubmitted && (
                <p className="rounded-2xl bg-[#B65A3C]/10 px-4 py-3 text-sm font-medium text-[#3A2418]">
                  Thank you! Your inquiry has been received.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
