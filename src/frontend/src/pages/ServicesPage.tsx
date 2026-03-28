import {
  Bot,
  Globe,
  MapPin,
  Palette,
  Search,
  Target,
  Video,
} from "lucide-react";

const whatsappUrl = "https://wa.me/923154556761";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    image: "/assets/generated/service-website-design.dim_800x500.jpg",
    desc: "Custom-built websites tailored to your brand and business goals with modern design principles. From concept to deployment, we create websites that not only look stunning but also perform exceptionally well in search engines and deliver seamless user experiences.",
    features: [
      "Custom design aligned to your brand identity and business goals",
      "SEO-optimised structure built in from the ground up",
      "Fast-loading, high-performance code for better user retention",
      "Fully responsive and mobile-first across all screen sizes",
      "Seamless user experience with clear navigation and strong CTAs",
    ],
  },
  {
    icon: Target,
    title: "Landing Page Development",
    image: "/assets/generated/service-landing-page.dim_800x500.jpg",
    desc: "High-converting landing pages designed to capture leads and drive business growth. We use proven design psychology, persuasive copy frameworks, and A/B-tested layouts to create pages that turn visitors into paying customers.",
    features: [
      "Conversion-focused layout built on proven design psychology",
      "Persuasive copy frameworks that speak directly to your audience",
      "A/B-tested design elements to maximise lead capture rate",
      "Strategic CTA placement for guided, high-intent user journeys",
      "Turns cold traffic directly into enquiries and paying customers",
    ],
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    image: "/assets/generated/service-seo.dim_800x500.jpg",
    desc: "Improve your Google rankings and attract organic traffic with proven SEO strategies. Our comprehensive SEO services cover technical optimization, keyword research, content strategy, and link building to help your business get found online.",
    features: [
      "Full technical SEO audit and on-page optimisation",
      "Targeted keyword research to attract high-intent traffic",
      "Content strategy for sustained, long-term organic growth",
      "Link building to strengthen domain authority and rankings",
      "Improved Google visibility so the right customers find you first",
    ],
  },
  {
    icon: MapPin,
    title: "Google Maps Integration",
    image: "/assets/generated/service-google-maps.dim_800x500.jpg",
    desc: "Help customers find your business easily with professional Google Maps setup and optimization. We optimize your Google Business Profile, integrate maps into your website, and implement local SEO strategies to drive foot traffic.",
    features: [
      "Google Business Profile setup and full optimisation",
      "Maps embedded directly and cleanly into your website",
      "Local SEO strategies to rank in nearby searches",
      "Improved visibility in Google's local results and map pack",
      "Drives real, measurable foot traffic to your physical location",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Logo Design",
    image: "/assets/generated/service-branding.dim_800x500.jpg",
    desc: "Create a memorable brand identity with professional logo design and brand guidelines. Our branding services include logo design, color palette selection, typography choices, and comprehensive brand style guides.",
    features: [
      "Unique, memorable logo crafted to represent your business",
      "Strategic color palette and typography selection for your brand",
      "Comprehensive brand style guide for consistency everywhere",
      "Cohesive visual identity across website, social, and print",
      "Builds long-term brand recognition, trust, and authority",
    ],
  },
  {
    icon: Video,
    title: "Video Ads Creation",
    image: "/assets/generated/service-video-ads.dim_800x500.jpg",
    desc: "Engaging promotional video content designed to capture attention and drive conversions. From concept and scripting to production and editing, we create compelling video advertisements for social media and digital campaigns.",
    features: [
      "Concept development and scripting tailored to your target audience",
      "Professional production and post-editing for a polished final output",
      "Optimised for Facebook, Instagram, YouTube, and paid ad platforms",
      "Attention-grabbing visuals with a clear, conversion-focused message",
      "Designed to drive clicks, generate leads, and increase sales",
    ],
  },
  {
    icon: Bot,
    title: "AI Customer Support & Automation Systems",
    image: "/assets/generated/service-ai-automation.dim_800x500.jpg",
    desc: "Smart AI systems that handle customer queries, bookings, and responses 24/7\u2014so you never miss a customer. Our intelligent chatbots and automation pipelines integrate seamlessly with your business workflows.",
    features: [
      "24/7 automated query handling with zero downtime or delays",
      "Handles bookings, FAQs, and customer responses automatically",
      "Seamless integration with your existing business workflows",
      "Reduces team workload and cuts operational overhead costs",
      "Improves customer satisfaction through instant, accurate responses",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#0B0B0B" }}>
      <section className="pt-32 pb-20" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
            What We Offer
          </span>
          <h1 className="font-poppins font-bold text-white text-4xl sm:text-5xl mb-4">
            Our Digital Services
          </h1>
          <p className="text-[#B0B0B0] font-inter text-base max-w-2xl mx-auto">
            Comprehensive solutions designed to establish, optimize, and scale
            your digital presence.
          </p>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 6).map((s, idx) => (
              <ServiceCard key={s.title} s={s} idx={idx} />
            ))}
          </div>
          {/* 7th card centred in its own row */}
          <div className="mt-6 flex justify-center">
            <div className="w-full md:w-1/2">
              <ServiceCard s={services[6]} idx={6} />
            </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-[#B0B0B0] font-inter text-base mb-8 max-w-xl mx-auto">
            Contact us today to discuss your project and receive a custom quote
            tailored to your needs.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="services.primary_button"
            className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-blue-500/30"
          >
            Get Your Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  s,
  idx,
}: {
  s: (typeof services)[number];
  idx: number;
}) {
  return (
    <div
      data-ocid={`services.item.${idx + 1}`}
      className="rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/40 transition-all duration-300 overflow-hidden"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Service Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      {/* Card Body */}
      <div className="p-8">
        <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mb-6">
          <s.icon size={26} className="text-[#3B82F6]" />
        </div>
        <h3 className="font-poppins font-bold text-white text-xl mb-3">
          {s.title}
        </h3>
        <p className="text-[#B0B0B0] font-inter text-sm leading-relaxed mb-5">
          {s.desc}
        </p>
        <div className="border-t border-[#1F1F1F] pt-5">
          <p className="text-[#3B82F6] font-poppins font-semibold text-xs uppercase tracking-widest mb-3">
            Key Features & Benefits
          </p>
          <ul className="space-y-2">
            {s.features.map((f) => (
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
  );
}
