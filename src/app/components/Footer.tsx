import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3A2418] px-4 py-10 text-[#FFFCF8]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <span className="inline-flex items-baseline gap-1 text-xl font-extrabold text-[#FFFCF8]">
            <span className="font-[family-name:var(--font-kaushan-script)]">
              Karibu
            </span>
            <span className="text-sm font-semibold tracking-[0.08em] uppercase">
              Kitchen
            </span>
          </span>
          <p className="text-sm text-[#FFFCF8]/80">
            East African flavors in the heart of Stockholm.
          </p>
          <p className="text-sm text-[#D99A3D]">Södermalm, Stockholm</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <Link
            href="/menu"
            className="rounded-sm text-sm font-medium text-[#FFFCF8] transition-colors hover:text-[#D99A3D] focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#3A2418]"
          >
            View Menu
          </Link>
          <Link
            href="/#booking"
            className="rounded-sm text-sm font-medium text-[#FFFCF8] transition-colors hover:text-[#D99A3D] focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#3A2418]"
          >
            Book a Table
          </Link>
          <Link
            href="/#contact"
            className="rounded-sm text-sm font-medium text-[#FFFCF8] transition-colors hover:text-[#D99A3D] focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#3A2418]"
          >
            Contact
          </Link>

          <p className="text-xs text-[#FFFCF8]/60">
            &copy; 2026 Karibu Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
