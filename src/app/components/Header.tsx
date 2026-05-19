import Logo from "./Logo";

export default function Header() {
  return (
    <header className="px-4 py-4 sticky top-0 z-50 bg-[#FFFCF8] border-b border-[#F1D8C8] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl flex items-center justify-between">
        <Logo />
        <a
          href="/#booking"
          className="rounded-full bg-[#B65A3C] px-4 py-2 text-sm font-medium text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8]"
        >
          Book a Table
        </a>
      </div>
    </header>
  );
}
