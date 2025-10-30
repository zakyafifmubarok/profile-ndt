export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between glass">
          <div className="flex items-center gap-3">
            <div className="rounded-md w-11 h-11 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5">
              {/* Logo mark */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                <path
                  d="M3 12h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                />
                <path
                  d="M6 6h12v12H6z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide uppercase">
                Nahcoda
              </div>
              <div className="text-xs text-slate-400 -mt-0.5">Digital Teknologi</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a className="hover:text-amber-500 transition" href="#about">
              About
            </a>
            <a className="hover:text-amber-500 transition" href="#services">
              Services
            </a>
            <a className="hover:text-amber-500 transition" href="#portfolio">
              Portfolio
            </a>
            <a className="hover:text-amber-500 transition" href="#contact">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-sky-500 text-sm font-medium shadow-sm"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button (visible in Figma import as separate layer) */}
          <button className="md:hidden p-2 rounded-md bg-transparent border border-white/5">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>
      {children}
      <footer className="mt-20 border-t border-white/5 pt-8 pb-20 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Nahcoda Digital Teknologi — All rights
        reserved.
      </footer>
    </>
  );
}