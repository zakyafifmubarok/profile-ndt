/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 pb-24">
      {/* HERO */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            We Build
            <br />
            <span className="text-white/90">Software Solutions</span>
          </h1>
          <p className="mt-6 text-slate-400 max-w-xl">
            Nahcoda Digital Teknologi adalah software house yang fokus membuat
            solusi digital berkualitas untuk perusahaan dan startup. Kami
            menggabungkan desain elegan dan engineering yang scalable.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-3 rounded-md font-medium glass border border-white/5"
            >
              Get Started
            </a>
            <a href="#portfolio" className="text-sm text-slate-400">
              See our work →
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 max-w-md text-sm text-slate-400">
            <div className="p-4 glass rounded-lg border border-white/3">
              <div className="font-semibold text-white">Web Development</div>
              <div className="mt-1">
                Responsive websites, APIs, and SaaS platforms.
              </div>
            </div>
            <div className="p-4 glass rounded-lg border border-white/3">
              <div className="font-semibold text-white">Mobile Apps</div>
              <div className="mt-1">Cross-platform apps for iOS & Android.</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          {/* Replace the src with the exported PNG for better fidelity in Figma. */}
          <div className="w-full max-w-md">
            <img
              src="/A_website_homepage_design_for_Nahcoda_Digital_Tekn.png"
              alt="Hero illustration — laptop with code"
              className="rounded-2xl border border-white/5 shadow-lg"
            />
            {/* If the image is not available locally, use the placeholder SVG below (uncomment to use) */}
            {/*           
          <div className="rounded-2xl border border-white/5 p-10 glass">
            <svg viewBox="0 0 200 140" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="200" height="140" rx="16" fill="#0f1112"/>
              <rect x="14" y="28" width="172" height="84" rx="6" fill="#111315"/>
              <g fill="#394a64" opacity="0.9">
                <rect x="24" y="40" width="140" height="6" rx="2"/>
                <rect x="24" y="52" width="110" height="6" rx="2"/>
                <rect x="24" y="64" width="90" height="6" rx="2"/>
              </g>
            </svg>
          </div>
           */}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-slate-400 max-w-prose">
              Kami adalah tim developer, designer, dan strategist yang
              berpengalaman. Kami membantu perusahaan membangun produk digital
              yang rapi, dapat diskalakan, dan mudah digunakan. Fokus kami pada
              kualitas kode, UX, dan delivery tepat waktu.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[color:var(--surface)] rounded-lg border border-white/3">
                <div className="text-sm text-slate-300 font-semibold">
                  Trusted process
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Agile workflows, regular review, dan komunikasi transparan.
                </div>
              </div>
              <div className="p-4 bg-[color:var(--surface)] rounded-lg border border-white/3">
                <div className="text-sm text-slate-300 font-semibold">
                  Custom solutions
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Solusi di-desain sesuai kebutuhan bisnis, bukan template kaku.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-lg glass border border-white/3">
              <div className="text-sm text-slate-400">Quick facts</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">40+</div>
                  <div className="text-sm text-slate-400">
                    Projects delivered
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10</div>
                  <div className="text-sm text-slate-400">Team members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-20">
        <h3 className="text-3xl font-bold">Our Services</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl glass border border-white/4">
            <div className="text-xl font-semibold">Web Development</div>
            <p className="mt-3 text-slate-400">
              Building responsive, maintainable web applications and APIs using
              modern stacks.
            </p>
            <div className="mt-4 text-sm text-slate-400">
              React / Vue / Laravel / Node.js
            </div>
          </div>
          <div className="p-6 rounded-xl glass border border-white/4">
            <div className="text-xl font-semibold">Mobile Applications</div>
            <p className="mt-3 text-slate-400">
              Cross-platform and native apps with strong UX and offline support.
            </p>
            <div className="mt-4 text-sm text-slate-400">
              React Native / Flutter / Native iOS & Android
            </div>
          </div>
          <div className="p-6 rounded-xl glass border border-white/4">
            <div className="text-xl font-semibold">UI / UX Design</div>
            <p className="mt-3 text-slate-400">
              Design systems, prototypes, and usability testing to create
              delightful interfaces.
            </p>
            <div className="mt-4 text-sm text-slate-400">
              Figma / Design systems
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO (simple grid to import) */}
      <section id="portfolio" className="mt-20">
        <h3 className="text-3xl font-bold">Portfolio</h3>
        <p className="mt-3 text-slate-400 max-w-prose">
          Selected projects & case studies.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-lg overflow-hidden border border-white/4 bg-[color:var(--surface)]">
            <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
              {" "}
              {/* thumbnail placeholder */}
              <span className="text-slate-500">Project Alpha</span>
            </div>
            <div className="p-4">
              <div className="font-semibold">Enterprise Dashboard</div>
              <div className="mt-2 text-sm text-slate-400">
                Dashboard for logistics company with realtime metrics.
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg overflow-hidden border border-white/4 bg-[color:var(--surface)]">
            <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
              <span className="text-slate-500">Project Beta</span>
            </div>
            <div className="p-4">
              <div className="font-semibold">Mobile e-Commerce</div>
              <div className="mt-2 text-sm text-slate-400">
                End to end shopping experience with in-app payments.
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg overflow-hidden border border-white/4 bg-[color:var(--surface)]">
            <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
              <span className="text-slate-500">Project Gamma</span>
            </div>
            <div className="p-4">
              <div className="font-semibold">SaaS CRM</div>
              <div className="mt-2 text-sm text-slate-400">
                CRM platform for small to medium businesses.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-20 pb-12">
        <h3 className="text-3xl font-bold">Contact</h3>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-lg bg-[color:var(--surface)] border border-white/4">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="p-3 rounded-md bg-transparent border border-white/6 w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-md bg-transparent border border-white/6 w-full"
                />
              </div>
              <textarea
                placeholder="Message"
                className="w-full p-3 rounded-md bg-transparent border border-white/6 h-36"
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-sky-500 font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="p-6 rounded-lg glass border border-white/3">
            <div className="text-sm text-slate-400">Office</div>
            <div className="mt-3 font-semibold">Nahcoda Digital Teknologi</div>
            <div className="mt-1 text-sm text-slate-400">
              Jakarta, Indonesia
            </div>

            <div className="mt-6 text-sm text-slate-400">
              <div>Email: hello@nahcoda.id</div>
              <div className="mt-2">Phone: +62 812 3456 7890</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
