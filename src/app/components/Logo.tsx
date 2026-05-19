import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#B65A3C]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 8c0-1 1-1 1-2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 7c0-1 1-1 1-2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 8c0-1 1-1 1-2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13c-2 0-2 3 0 3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13c2 0 2 3 0 3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 11h12l-2 7H8l-2-7z"
          />
        </svg>
        <span className="inline-flex items-baseline gap-1 text-xl font-extrabold tracking-[-0.04em] text-[#3A2418]">
          <span className="font-[family-name:var(--font-kaushan-script)] tracking-normal">
            Karibu
          </span>
          <span className="text-sm font-semibold tracking-[0.08em] uppercase">
            Kitchen
          </span>
        </span>
      </span>
    </Link>
  );
}
