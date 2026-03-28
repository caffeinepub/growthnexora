import { CheckCircle2 } from "lucide-react";

const whatsappUrl = "https://wa.me/923154556761";

const included = [
  "Free initial consultation & project scope discussion",
  "Custom design tailored to your brand identity",
  "Mobile-responsive development across all devices",
  "SEO fundamentals integrated from the start",
  "Performance optimization for fast loading times",
  "Post-launch support and guidance",
  "Clear communication and transparent progress updates",
];

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: "#0B0B0B" }}>
      {/* Hero — no reveal */}
      <section className="pt-32 pb-20" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h1 className="font-poppins font-bold text-white text-4xl sm:text-5xl mb-4">
            Custom Pricing for Your Needs
          </h1>
          <p className="text-[#B0B0B0] font-inter text-base max-w-2xl mx-auto">
            We offer customized solutions based on your business goals. No
            hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="py-24 reveal" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-[#1F1F1F] p-10 text-center mb-12"
            style={{ backgroundColor: "#121212" }}
          >
            <div className="w-16 h-16 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-[#3B82F6] font-poppins font-bold text-xl">
                $
              </span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl mb-4">
              No Fixed Prices &#8212; Custom Quotes Only
            </h2>
            <p className="text-[#B0B0B0] font-inter text-base leading-relaxed max-w-2xl mx-auto mb-8">
              We offer customized solutions based on your business goals. Every
              project is unique, and our pricing reflects the specific scope,
              complexity, and requirements of your project. Contact us to
              receive a tailored quote.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="pricing.primary_button"
              className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-blue-500/30 text-lg"
            >
              Book Your Project
            </a>
          </div>

          <div
            className="rounded-2xl border border-[#1F1F1F] p-8"
            style={{ backgroundColor: "#121212" }}
          >
            <h3 className="font-poppins font-bold text-white text-xl mb-6">
              Every Project Includes:
            </h3>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#3B82F6] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[#B0B0B0] font-inter text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="py-20 reveal"
        style={{
          background: "linear-gradient(135deg, #0F1929 0%, #0B0B0B 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-[#B0B0B0] font-inter text-base mb-8 max-w-xl mx-auto">
            Start your digital journey with a professional website designed for
            your business. Let&apos;s discuss your goals.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="pricing.cta_button"
            className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-blue-500/30"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
