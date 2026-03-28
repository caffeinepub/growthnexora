import { Link } from "@tanstack/react-router";
import {
  Bot,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Search,
  Target,
  TrendingUp,
  Video,
} from "lucide-react";

const whatsappUrl = "https://wa.me/923154556761";

const features = [
  {
    title: "Powerful Growth Systems Design",
    desc: "We craft digital systems engineered for scalability and measurable results.",
  },
  {
    title: "Mobile-Friendly Development",
    desc: "Every solution is built responsive-first, ensuring seamless experience on all devices.",
  },
  {
    title: "Free Assistance for Clients",
    desc: "We provide ongoing support and guidance to all our clients at no extra cost.",
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "We respect timelines and deliver quality work without compromise.",
  },
  {
    title: "Affordable Packages for Growing Businesses",
    desc: "Premium solutions designed to fit real-world budgets.",
  },
  {
    title: "Conversion-Focused Strategies",
    desc: "Every decision is driven by performance metrics. We optimize for real ROI, not just aesthetics.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Custom-built websites tailored to your brand and business goals with modern design principles.",
  },
  {
    icon: Target,
    title: "Landing Page Development",
    desc: "High-converting landing pages designed to capture leads and drive business growth.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Improve your Google rankings and attract organic traffic with proven SEO strategies.",
  },
  {
    icon: MapPin,
    title: "Google Maps Integration",
    desc: "Help customers find your business easily with professional Google Maps setup and optimization.",
  },
  {
    icon: Palette,
    title: "Branding & Logo Design",
    desc: "Create a memorable brand identity with professional logo design and brand guidelines.",
  },
  {
    icon: Video,
    title: "Video Ads Creation",
    desc: "Scroll-stopping video advertisements crafted to capture attention and drive measurable conversions.",
  },
  {
    icon: Bot,
    title: "AI Customer Support & Automation",
    desc: "Smart AI systems that handle customer queries, bookings, and responses 24/7.",
  },
];

const projects = [
  {
    num: "01",
    title: "Jewellery Website",
    desc: "A modern and elegant website concept designed for a jewellery business to showcase premium gold and diamond collections online.",
    image: "/assets/generated/portfolio-jewellery.dim_800x600.jpg",
  },
  {
    num: "02",
    title: "Bakery Website",
    desc: "A warm and inviting website concept created for a bakery business to showcase baked products and attract local customers.",
    image: "/assets/generated/portfolio-bakery.dim_800x600.jpg",
  },
  {
    num: "03",
    title: "AI Customer Support & Voice Automation System",
    desc: "Advanced AI communication systems managing both chat and voice interactions in real time—reducing workload, improving response speed, and creating a seamless customer experience.",
    image:
      "/assets/generated/portfolio-ai-customer-support-voice.dim_800x600.jpg",
  },
  {
    num: "04",
    title: "Video Ads That Don't Just Look Good — They Convert.",
    desc: "High-performing video advertisements designed to capture attention, communicate value instantly, and drive measurable results.",
    image: "/assets/generated/video-ads-portfolio.dim_800x600.jpg",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0B0B0B" }}>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-20"
        style={{ backgroundColor: "#0B0B0B" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 10% 30%, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-6 block">
                Digital Growth Agency
              </span>
              <h1 className="font-poppins font-extrabold text-white leading-tight text-4xl sm:text-5xl lg:text-[3.5rem] mb-6">
                Engineering Digital Systems That Drive Real Business Growth
              </h1>
              <p className="text-[#B0B0B0] font-inter text-base leading-relaxed mb-8 max-w-lg">
                GrowthNexora helps businesses grow through high-performing
                websites, smart automation, and strategic digital systems. We
                focus on building solutions that attract customers, improve
                conversions, and turn online presence into real revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="hero.primary_button"
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-center shadow-lg hover:shadow-blue-500/30"
                >
                  Get Your Custom Quote
                </a>
                <Link
                  to="/portfolio"
                  data-ocid="hero.secondary_button"
                  className="border border-white/30 hover:border-[#3B82F6] hover:text-[#3B82F6] text-white font-poppins font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 60px rgba(59,130,246,0.18), 0 0 120px rgba(59,130,246,0.06)",
                }}
              >
                <img
                  src="/assets/generated/hero-growth.dim_1200x700.jpg"
                  alt="Digital growth visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
              Why Us
            </span>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
              Why Businesses Choose GrowthNexora
            </h2>
            <p className="text-[#B0B0B0] font-inter text-base max-w-2xl mx-auto">
              We don&apos;t just build systems; we engineer digital growth
              engines designed for clarity, speed, and conversion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-6 rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/40 transition-all duration-300"
                style={{ backgroundColor: "#161616" }}
              >
                <CheckCircle2
                  className="text-[#3B82F6] flex-shrink-0 mt-0.5"
                  size={22}
                />
                <div>
                  <h3 className="font-poppins font-semibold text-white text-base mb-1">
                    {f.title}
                  </h3>
                  <p className="text-[#B0B0B0] font-inter text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-3 block">
                What We Do
              </span>
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl">
                Our Digital Services
              </h2>
              <p className="text-[#B0B0B0] font-inter text-base mt-3 max-w-xl">
                Comprehensive solutions designed to establish, optimize, and
                scale your digital presence.
              </p>
            </div>
            <Link
              to="/services"
              data-ocid="services.link"
              className="text-[#3B82F6] hover:text-[#2563EB] font-inter font-semibold text-sm flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              View All Services &#8594;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div
                key={s.title}
                data-ocid={`services.card.${idx + 1}`}
                className="p-6 rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/40 hover:scale-[1.02] transition-all duration-300 cursor-default"
                style={{ backgroundColor: "#121212" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mb-5">
                  <s.icon size={22} className="text-[#3B82F6]" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-base mb-2">
                  {s.title}
                </h3>
                <p className="text-[#B0B0B0] font-inter text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-24" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-3 block">
                Our Work
              </span>
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl">
                Recent Projects
              </h2>
              <p className="text-[#B0B0B0] font-inter text-base mt-3 max-w-xl">
                A selection of our recent work, demonstrating our commitment to
                clean design and robust functionality.
              </p>
            </div>
            <Link
              to="/portfolio"
              data-ocid="portfolio.link"
              className="text-[#3B82F6] hover:text-[#2563EB] font-inter font-semibold text-sm flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              View Full Portfolio &#8594;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map((p, idx) => (
              <div
                key={p.title}
                data-ocid={`portfolio.item.${idx + 1}`}
                className="rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/40 overflow-hidden hover:scale-[1.02] transition-all duration-300"
                style={{ backgroundColor: "#161616" }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 text-[#3B82F6] font-poppins font-bold text-2xl opacity-80">
                    {p.num}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-poppins font-semibold text-white text-sm mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[#B0B0B0] font-inter text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Website Development",
                name: "Ali Raza",
                role: "Local Business Owner",
                quote:
                  "We needed a proper website that actually represents our business. GrowthNexora delivered a clean, professional site that loads fast and clearly explains our services. Customers now take us more seriously, and we've started getting more inquiries through the website.",
              },
              {
                category: "AI Customer Support & Automation",
                name: "Usman Khalid",
                role: "Service-Based Business",
                quote:
                  "Managing customer messages was getting difficult for us. The AI system now handles most of the queries instantly, even when we're offline. It's helped us stay responsive and we're not missing potential customers anymore.",
              },
              {
                category: "Branding & SEO",
                name: "Sophie Williams",
                role: "Online Brand Owner",
                quote:
                  "I worked with GrowthNexora on branding, website, and SEO. Everything was handled professionally and with a clear strategy. The brand now looks consistent, the website feels polished, and we're slowly seeing better visibility online.",
              },
              {
                category: "Video Ads & Landing Page",
                name: "Daniel Carter",
                role: "Small Business Owner",
                quote:
                  "We needed something that not only attracts attention but also converts. GrowthNexora helped us with both video ads and a landing page, and the combination worked really well. The ads brought in traffic, and the landing page made it easier for customers to take action. Overall, the whole setup feels much more effective.",
              },
            ].map((t) => (
              <div
                key={t.name}
                data-ocid="testimonials.item"
                className="flex flex-col p-6 rounded-xl border border-white/10 h-full"
                style={{ backgroundColor: "#121212" }}
              >
                <span className="text-[#3B82F6] text-[10px] font-poppins font-semibold uppercase tracking-widest mb-4">
                  {t.category}
                </span>
                <div className="text-3xl text-[#3B82F6] font-serif leading-none mb-3 select-none">
                  &#8220;
                </div>
                <p className="text-[#B0B0B0] font-inter text-sm leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>
                <div>
                  <p className="text-white font-poppins font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#B0B0B0] font-inter text-xs mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
                Pricing
              </span>
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
                Custom Pricing for Your Unique Needs
              </h2>
              <p className="text-[#B0B0B0] font-inter text-base leading-relaxed mb-8">
                We offer customized solutions based on your business goals. No
                fixed packages — everything is scoped to your project, your
                timeline, and your budget.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="pricing.primary_button"
                className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-blue-500/30"
              >
                Book Your Project
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {[
                {
                  icon: TrendingUp,
                  label: "Results-driven approach",
                  desc: "We build for performance, not just appearance.",
                },
                {
                  icon: Target,
                  label: "Scoped to your goals",
                  desc: "Every quote is tailored — no cookie-cutter packages.",
                },
                {
                  icon: CheckCircle2,
                  label: "No hidden costs",
                  desc: "Transparent pricing with clear deliverables upfront.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl border border-[#1F1F1F]"
                  style={{ backgroundColor: "#161616" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-white font-poppins font-semibold text-sm mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[#B0B0B0] font-inter text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, #0F1929 0%, #0B0B0B 50%, #0F1929 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-[#B0B0B0] font-inter text-base max-w-xl mx-auto mb-8">
            Start your digital journey with a professional website designed for
            your business. Let&apos;s discuss your goals.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.primary_button"
            className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-200 text-lg shadow-xl hover:shadow-blue-500/40"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
              Contact
            </span>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl">
              Get In Touch
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp.button"
              className="p-6 rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/50 text-center transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#121212" }}
            >
              <MessageCircle
                size={28}
                className="text-[#3B82F6] mx-auto mb-3"
              />
              <h3 className="font-poppins font-semibold text-white text-sm mb-1">
                WhatsApp
              </h3>
              <p className="text-[#B0B0B0] font-inter text-xs">
                +92 315 4556761
              </p>
            </a>
            <a
              href="mailto:Growthnexora8@gmail.com"
              data-ocid="contact.email.button"
              className="p-6 rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/50 text-center transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#121212" }}
            >
              <Mail size={28} className="text-[#3B82F6] mx-auto mb-3" />
              <h3 className="font-poppins font-semibold text-white text-sm mb-1">
                Email
              </h3>
              <p className="text-[#B0B0B0] font-inter text-xs">
                Growthnexora8@gmail.com
              </p>
            </a>
            <a
              href="https://maps.google.com/?q=Lahore,Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.location.button"
              className="p-6 rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/50 text-center transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#121212" }}
            >
              <MapPin size={28} className="text-[#3B82F6] mx-auto mb-3" />
              <h3 className="font-poppins font-semibold text-white text-sm mb-1">
                Location
              </h3>
              <p className="text-[#B0B0B0] font-inter text-xs">
                Lahore, Pakistan
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
