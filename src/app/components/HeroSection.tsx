"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const heroSlides = [
  {
    eyebrow: "Welcome to Karibu Kitchen",
    title: "Warm East African hospitality in Stockholm",
    description:
      "Warm spices, bold flavours and a welcoming table inspired by Kenya and Tanzania.",
    image: "/images/hero/hero-hospitality.png",
    alt: "Warm East African hospitality at Karibu Kitchen",
  },
  {
    eyebrow: "Spices & shared plates",
    title: "Discover the taste of Kenya and Tanzania",
    description:
      "Comforting stews, grilled favourites and vibrant dishes made for sharing.",
    image: "/images/hero/hero-shared-plates.png",
    alt: "Shared plates and East African dishes at Karibu Kitchen",
  },
  {
    eyebrow: "Events & catering",
    title: "Celebrate with flavour and warmth",
    description:
      "From birthdays to graduations and private dinners, we help make your gathering memorable.",
    image: "/images/hero/hero-events.png",
    alt: "Private event and celebration setup at Karibu Kitchen",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [incomingSlide, setIncomingSlide] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeSlideData = heroSlides[activeSlide];
  const incomingSlideData =
    incomingSlide !== null ? heroSlides[incomingSlide] : null;

  useEffect(() => {
    let transitionTimeout: ReturnType<typeof setTimeout> | null = null;

    const currentInterval = setInterval(() => {
      let nextIndex = 0;
      setIsTransitioning(true);

      setActiveSlide((prevActiveSlide) => {
        nextIndex =
          prevActiveSlide === heroSlides.length - 1 ? 0 : prevActiveSlide + 1;

        setIncomingSlide(nextIndex);

        return prevActiveSlide;
      });

      transitionTimeout = setTimeout(() => {
        setActiveSlide(nextIndex);
        setIncomingSlide(null);
        setIsTransitioning(false);
      }, 1000); // Delay for fade transition
    }, 7000); // Change slide every 7 seconds

    return () => {
      clearInterval(currentInterval);

      if (transitionTimeout) {
        clearTimeout(transitionTimeout);
      }
    };
  }, []);

  return (
    <section id="home">
      <div className="relative min-h-[78vh] overflow-hidden text-white">
        <Image
          src={activeSlideData.image}
          alt={activeSlideData.alt}
          fill
          priority
          className="z-0 object-cover"
          sizes="100vw"
        />
        {incomingSlideData && (
          <Image
            src={incomingSlideData.image}
            alt={incomingSlideData.alt}
            fill
            className={`z-[1] object-cover transition-opacity duration-1000 ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 z-[2] bg-[#3A2418]/55" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center">
          <div className="relative flex w-full max-w-3xl flex-col items-center">
            <div
              className={`flex flex-col items-center gap-5 transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
              <p className="text-5xl font-[family-name:var(--font-kaushan-script)] text-[#FFFCF8]">
                Karibu!
              </p>
              <p className="text-sm font-medium tracking-[0.14em] uppercase text-[#D99A3D]">
                {activeSlideData.eyebrow}
              </p>
              <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {activeSlideData.title}
              </h1>
              <p className="max-w-md text-base leading-7 text-white/85">
                {activeSlideData.description}
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row">
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
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#3A2418]">
          Discover the taste of Kenya and Tanzania
        </h2>
        <p className="mt-4 text-base leading-7 text-[#5C4033]">
          Karibu Kitchen brings together comforting stews, vibrant spices,
          grilled favorites, and warm hospitality inspired by the kitchens of
          Kenya and Tanzania.
        </p>
      </div>
    </section>
  );
}
