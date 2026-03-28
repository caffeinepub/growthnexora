const projects = [
  {
    num: "01",
    title: "Jewellery Website",
    category: "Website Design & Development",
    desc: "A modern and elegant website concept designed for a jewellery business to showcase premium gold and diamond collections online. The website focuses on visual presentation, brand trust, and easy customer inquiries.",
    image: "/assets/generated/portfolio-jewellery.dim_800x600.jpg",
    features: [
      "Visual-first premium layout built to showcase gold & diamond collections",
      "Brand trust elements — elegant typography, polished design language",
      "Customer inquiry integration for seamless lead generation",
      "High-quality product image display with clean visual hierarchy",
      "Fully mobile responsive for customers browsing on any device",
    ],
  },
  {
    num: "02",
    title: "Bakery Website",
    category: "Website Design & Development",
    desc: "A warm and inviting website concept created for a bakery business to showcase baked products, promote special items, and attract local customers looking for fresh bakery goods.",
    image: "/assets/generated/portfolio-bakery.dim_800x600.jpg",
    features: [
      "Warm, appetite-driven visual design tailored for food businesses",
      "Product showcase section for baked goods, specials, and seasonal items",
      "Local customer attraction with contact, location, and call-to-action sections",
      "Promotional highlights for featured or limited-time offerings",
      "Mobile-optimised layout for on-the-go local searches",
    ],
  },
  {
    num: "03",
    title: "AI Customer Support & Voice Automation System",
    category: "AI & Automation",
    desc: "We design advanced AI communication systems that manage both chat and voice interactions in real time. Whether it's answering questions, qualifying leads, or guiding users through your services, the system responds instantly across multiple touchpoints.\nFrom website chatbots to voice assistants that can handle calls or voice queries, everything is built to reduce workload, improve response speed, and create a seamless customer experience.",
    image:
      "/assets/generated/portfolio-ai-customer-support-voice.dim_800x600.jpg",
    features: [
      "Real-time AI chat and voice interaction across multiple touchpoints",
      "Automated lead qualification and service guidance flows",
      "Website chatbot + voice assistant integrated in one system",
      "24/7 availability — responds instantly with zero human intervention",
      "Reduces team workload and significantly improves response speed",
    ],
  },
  {
    num: "04",
    title: "Video Ads That Don't Just Look Good — They Convert.",
    category: "Performance Video Ads",
    desc: "We create high-performing video advertisements designed to capture attention, communicate value instantly, and drive measurable results. From scroll-stopping hooks to conversion-focused storytelling, every video is strategically crafted to turn viewers into customers.",
    image: "/assets/generated/video-ads-portfolio.dim_800x600.jpg",
    features: [
      "Scroll-stopping hooks engineered to capture attention in the first 3 seconds",
      "Conversion-focused storytelling structure — not just visually appealing",
      "Strategic messaging that communicates value instantly",
      "Optimised for social media and paid ad platforms",
      "Every frame crafted with one goal: turning viewers into customers",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div style={{ backgroundColor: "#0B0B0B" }}>
      <section className="pt-32 pb-20" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
            Our Work
          </span>
          <h1 className="font-poppins font-bold text-white text-4xl sm:text-5xl mb-4">
            Our Portfolio
          </h1>
          <p className="text-[#B0B0B0] font-inter text-base max-w-2xl mx-auto">
            A selection of our recent work, demonstrating our commitment to
            clean design and robust functionality.
          </p>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((p, idx) => (
              <div
                key={p.title}
                data-ocid={`portfolio.item.${idx + 1}`}
                className="rounded-2xl border border-[#1F1F1F] overflow-hidden hover:border-[#3B82F6]/50 hover:scale-[1.01] transition-all duration-300"
                style={{ backgroundColor: "#121212" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[#3B82F6] font-poppins font-bold text-3xl opacity-60">
                    {p.num}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-[#3B82F6]/20 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-inter font-semibold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-white text-xl mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[#B0B0B0] font-inter text-sm leading-relaxed whitespace-pre-line mb-5">
                    {p.desc}
                  </p>
                  <div className="border-t border-[#1F1F1F] pt-5">
                    <p className="text-[#3B82F6] font-poppins font-semibold text-xs uppercase tracking-widest mb-3">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                          <span className="text-[#B0B0B0] font-inter text-sm leading-relaxed">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
