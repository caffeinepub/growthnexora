const whatsappUrl = "https://wa.me/923154556761";

const values = [
  {
    title: "Clarity",
    desc: "We communicate clearly and deliver transparent results.",
    num: "01",
  },
  {
    title: "Speed",
    desc: "Fast delivery without sacrificing quality or attention to detail.",
    num: "02",
  },
  {
    title: "Innovation",
    desc: "We leverage the latest technologies to stay ahead of the curve.",
    num: "03",
  },
  {
    title: "Results",
    desc: "Every decision is driven by one thing\u2014your measurable growth.",
    num: "04",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0B0B0B" }}>
      <section className="pt-32 pb-20" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
            Who We Are
          </span>
          <h1 className="font-poppins font-bold text-white text-4xl sm:text-5xl mb-4">
            About GrowthNexora
          </h1>
          <p className="text-[#B0B0B0] font-inter text-base max-w-2xl mx-auto">
            A modern digital agency focused on building systems that drive real
            business growth.
          </p>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
                Our Mission
              </span>
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-6">
                We Engineer Growth, Not Just Websites
              </h2>
              <div className="space-y-4 text-[#B0B0B0] font-inter text-base leading-relaxed">
                <p>
                  GrowthNexora is a modern digital agency focused on building
                  systems that drive real business growth. We don&apos;t just
                  create websites&#8212;we design high-performing digital
                  assets, intelligent automation systems, and data-driven
                  strategies that help businesses attract customers, increase
                  conversions, and generate consistent revenue.
                </p>
                <p>
                  Our approach is simple: combine clean design, smart
                  technology, and strategic thinking to turn businesses into
                  scalable digital machines. From professional websites to
                  AI-powered customer handling systems, every solution we build
                  is designed with one goal in mind&#8212;measurable growth.
                </p>
                <p>
                  We understand that every business is unique, which is why we
                  don&apos;t offer one-size-fits-all solutions. Instead, we take
                  the time to understand your specific goals, challenges, and
                  target audience before crafting a tailored digital strategy.
                </p>
              </div>
            </div>
            <div
              className="p-8 rounded-2xl border border-[#1F1F1F]"
              style={{ backgroundColor: "#121212" }}
            >
              <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
                Our Founder
              </span>
              <h3 className="font-poppins font-bold text-white text-2xl mb-4">
                Muhammad Zain Shahbaz
              </h3>
              <p className="text-[#B0B0B0] font-inter text-base leading-relaxed mb-6">
                GrowthNexora was founded by Muhammad Zain Shahbaz with a vision
                to help businesses move beyond basic online presence and build
                systems that generate real growth.
              </p>
              <p className="text-[#B0B0B0] font-inter text-base leading-relaxed">
                With deep expertise in web development, digital marketing, and
                AI automation, Zain built GrowthNexora to bridge the gap between
                technology and business results&#8212;ensuring every solution
                delivers tangible, measurable outcomes.
              </p>
              <div className="mt-8 pt-6 border-t border-[#1F1F1F]">
                <p className="text-[#3B82F6] font-poppins font-semibold text-sm italic">
                  &ldquo;Every business deserves a digital presence that
                  actually works&#8212;one that attracts, converts, and grows
                  consistently.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
              Our Values
            </span>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-[#1F1F1F] text-center"
                style={{ backgroundColor: "#161616" }}
              >
                <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#3B82F6] font-poppins font-bold text-sm">
                    {v.num}
                  </span>
                </div>
                <h3 className="font-poppins font-semibold text-white text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-[#B0B0B0] font-inter text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #0F1929 0%, #0B0B0B 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-[#B0B0B0] font-inter text-base mb-8 max-w-xl mx-auto">
            Let&apos;s build something great together. Reach out and let&apos;s
            discuss how we can help your business grow.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="about.primary_button"
            className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-blue-500/30"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
