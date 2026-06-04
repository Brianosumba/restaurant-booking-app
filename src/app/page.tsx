import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import QuickInfoSection from "./components/QuickInfoSection";
import MenuSection from "./components/MenuSection";
import BookingSection from "./components/BookingSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <QuickInfoSection />
        <MenuSection />
        <ContactSection />
        <BookingSection />
      </main>

      <Footer />
    </>
  );
}
