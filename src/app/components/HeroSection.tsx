"use client";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    eyebrow: "Welcome to Karibu Kitchen",
    title: "Warm East African hospitality in Stockholm",
    description:
      "Warm spices, bold flavours and a welcoming table inspired by Kenya and Tanzania.",
    imageLabel: "Warm table & spices",
  },
  {
    eyebrow: "Spices & shared plates",
    title: "Discover the taste of Kenya and Tanzania",
    description:
      "Comforting stews, grilled favourites and vibrant dishes made for sharing.",
    imageLabel: "Vibrant dishes & shared plates",
  },
  {
    eyebrow: "Events & catering",
    title: "Celebrate with flavour and warmth",
    description:
      "From birthdays to graduations and private dinners, we help make your gathering memorable.",
    imageLabel: "Celebrations & private dinners",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = heroSlides[activeSlide];

  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout> | null = null;

    const currentInterval = setInterval(() => {
      setIsFading(true);
      fadeTimeout = setTimeout(() => {
        setActiveSlide((prev) =>
          prev === heroSlides.length - 1 ? 0 : prev + 1,
        );
        setIsFading(false);
      }, 1000); // Delay for fade transition
    }, 7000); // Change slide every 7 seconds

    return () => {
      clearInterval(currentInterval);
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
    };
  }, []);

  return (
    <section id="home">
      <div className="min-h-[70vh] bg-[#3A2418] text-white flex flex-col items-center justify-center gap-4">
        <div
          className={`max-w-xl px-4 py-16 sm:py-20 text-center flex flex-col items-center gap-4 transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"}`}
        >
          <p className="text-5xl font-[family-name:var(--font-kaushan-script)] text-[#FFFCF8]">
            Karibu!
          </p>
          <p className="text-sm font-medium tracking-[0.14em] uppercase text-[#D99A3D]">
            {currentSlide.eyebrow}
          </p>
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {currentSlide.title}
          </h1>
          <p className="max-w-md text-base leading-7 text-white/85">
            {currentSlide.description}
          </p>
          <div className="flex flex-col gap-3 items-center sm:flex-row">
            <a
              href="/#booking"
              className="rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#3A2418]"
            >
              Book a Table
            </a>
            <a
              href="/menu"
              className="rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#3A2418] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#3A2418]"
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
          grilled favorites, and warm hospitality inspired by the kitchens of
          Kenya and Tanzania.
        </p>
      </div>
    </section>
  );
}
