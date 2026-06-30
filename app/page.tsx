export default function Home() {
  const phone = "(732) 397-7942";
  const phoneTel = "tel:7323977942";

  return (
    <main className="bg-[#F9FAFB] text-[#111827] font-sans">

      {/* ── NAV ── */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[#7C3AED] flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight">
              MapLead Solutions
            </span>
          </div>
          <a
            href={phoneTel}
            className="text-[#7C3AED] font-semibold text-sm sm:text-base hover:text-[#5B21B6] transition-colors"
          >
            {phone}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="py-20 md:py-32 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-block bg-[#EDE9FE] text-[#7C3AED] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Local SEO for NJ Home Service Businesses
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111827] leading-tight mb-6">
            Get Found on Google.
            <br className="hidden sm:block" />
            Get More Calls.
          </h1>
          <p className="text-lg sm:text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto leading-relaxed">
            We help New Jersey home service businesses rank higher on Google Maps
            and turn searches into customers.
          </p>
          <a
            href={phoneTel}
            className="inline-block bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-bold text-lg px-10 py-4 rounded-2xl transition-colors shadow-lg shadow-purple-200"
          >
            Get Your Free Audit
          </a>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            The Reality for Local Contractors
          </h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-xl mx-auto">
            Most NJ contractors are missing out on customers every single day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "97%",
                text: "of people search online before calling a local business",
              },
              {
                stat: "75%",
                text: "of all clicks go to the top 3 Google Map results",
              },
              {
                stat: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C12.95 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
                  </svg>
                ),
                text: "Most contractors in NJ are invisible on Google — we fix that",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#7C3AED] text-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center gap-4"
              >
                <div className="text-4xl font-extrabold">{card.stat}</div>
                <p className="text-lg font-medium leading-snug opacity-90">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 px-5 sm:px-8 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            What We Do
          </h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-xl mx-auto">
            A focused, proven set of services built specifically for local businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C12.95 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
                  </svg>
                ),
                title: "Google Business Profile Optimization",
                desc: "We fully optimize your GBP so Google knows exactly what you do and where you do it.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
                title: "On-Page SEO + Schema Markup",
                desc: "We fix your website's technical signals so Google ranks you above competitors.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3v18h18" />
                    <path d="M18 9l-5 5-4-4-3 3" />
                  </svg>
                ),
                title: "Monthly Management + Reporting",
                desc: "Four posts a month, review monitoring, and a monthly report showing exactly how your rankings are moving.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4"
              >
                <div className="w-14 h-14 bg-[#EDE9FE] rounded-xl flex items-center justify-center text-[#7C3AED]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827]">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            How It Works
          </h2>
          <p className="text-[#6B7280] text-center mb-14 max-w-xl mx-auto">
            Simple, transparent, and built to get results fast.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* connector line visible on md+ */}
            <div className="hidden md:block absolute top-7 left-[calc(16.67%+1.75rem)] right-[calc(16.67%+1.75rem)] h-0.5 bg-[#EDE9FE]" />
            {[
              { step: "1", text: "We audit your entire Google presence" },
              { step: "2", text: "We fix everything holding you back" },
              { step: "3", text: "You start getting more calls" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center gap-4 relative"
              >
                <div className="w-14 h-14 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-2xl font-extrabold shadow-lg shadow-purple-100 z-10">
                  {item.step}
                </div>
                <p className="text-lg font-semibold text-[#111827] leading-snug max-w-[200px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS WE TARGET ── */}
      <section className="py-16 px-5 sm:px-8 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            Results We Target
          </h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-xl mx-auto">
            No guessing. No vanity metrics. Just the numbers that mean more customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                headline: "5+ New Reviews Per Month",
                sub: "Consistent social proof that builds trust and boosts your Maps ranking.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C12.95 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
                  </svg>
                ),
                headline: "Top 3 Maps Ranking Within 90 Days",
                sub: "Show up where 75% of the clicks actually go.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3v18h18" />
                    <rect x="7" y="12" width="3" height="7" rx="0.5" />
                    <rect x="12" y="8" width="3" height="11" rx="0.5" />
                    <rect x="17" y="5" width="3" height="14" rx="0.5" />
                  </svg>
                ),
                headline: "Full Transparency",
                sub: "Monthly reporting on every metric that matters — rankings, calls, clicks.",
              },
            ].map((result, i) => (
              <div
                key={i}
                className="bg-[#EDE9FE] rounded-2xl shadow-md p-8 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#7C3AED]">
                  {result.icon}
                </div>
                <h3 className="text-lg font-bold text-[#5B21B6]">
                  {result.headline}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{result.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-5 sm:px-8 bg-[#5B21B6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Show Up on Google?
          </h2>
          <p className="text-purple-200 text-lg mb-10 leading-relaxed">
            Call or text us for a free Google audit — we&apos;ll show you exactly
            what&apos;s costing you calls.
          </p>
          <a
            href={phoneTel}
            className="inline-block bg-white text-[#5B21B6] font-extrabold text-xl px-12 py-5 rounded-2xl hover:bg-gray-50 transition-colors shadow-xl"
          >
            Call {phone}
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111827] py-8 px-5">
        <div className="max-w-6xl mx-auto text-center space-y-1">
          <p className="text-gray-400 text-sm">
            <span className="text-white font-semibold">MapLead Solutions</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;Morganville, NJ&nbsp;&nbsp;|&nbsp;&nbsp;
            <a
              href={phoneTel}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {phone}
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;mapleadsolutions.com
          </p>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} MapLead Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
