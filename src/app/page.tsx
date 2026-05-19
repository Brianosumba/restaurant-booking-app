import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import QuickInfoSection from "./components/QuickInfoSection";
import MenuSection from "./components/MenuSection";
import BookingSection from "./components/BookingSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <QuickInfoSection />
        <MenuSection />
        <BookingSection />
      </main>

      <Footer />
    </>
  );
}
