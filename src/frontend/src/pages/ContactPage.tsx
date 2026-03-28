import { Mail, MapPin, MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/923154556761";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#0B0B0B" }}>
      {/* Hero — no reveal */}
      <section className="pt-32 pb-20" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#3B82F6] text-xs font-poppins font-semibold uppercase tracking-widest mb-4 block">
            Contact
          </span>
          <h1 className="font-poppins font-bold text-white text-4xl sm:text-5xl mb-4">
            Get In Touch
          </h1>
          <p className="text-[#B0B0B0] font-inter text-base max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you. Reach out
            and let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 reveal" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 stagger-children">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp.button"
              className="p-8 rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/50 text-center transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#121212" }}
            >
              <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={26} className="text-[#3B82F6]" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-base mb-2">
                WhatsApp
              </h3>
              <p className="text-[#B0B0B0] font-inter text-sm">
                +92 315 4556761
              </p>
              <p className="text-[#3B82F6] font-inter text-xs mt-2">
                Click to message
              </p>
            </a>
            <a
              href="mailto:Growthnexora8@gmail.com"
              data-ocid="contact.email.button"
              className="p-8 rounded-2xl border border-[#1F1F1F] hover:border-[#3B82F6]/50 text-center transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#121212" }}
            >
              <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mx-auto mb-4">
                <Mail size={26} className="text-[#3B82F6]" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-base mb-2">
                Email
              </h3>
              <p className="text-[#B0B0B0] font-inter text-sm">
                Growthnexora8@gmail.com
              </p>
              <p className="text-[#3B82F6] font-inter text-xs mt-2">
                Send an email
              </p>
            </a>
            <div
              className="p-8 rounded-2xl border border-[#1F1F1F] text-center"
              style={{ backgroundColor: "#121212" }}
            >
              <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mx-auto mb-4">
                <MapPin size={26} className="text-[#3B82F6]" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-base mb-2">
                Location
              </h3>
              <p className="text-[#B0B0B0] font-inter text-sm">
                Lahore, Pakistan
              </p>
              <p className="text-[#B0B0B0] font-inter text-xs mt-2">
                We work with clients worldwide
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div
            className="rounded-2xl border border-[#1F1F1F] p-10 text-center reveal"
            style={{ backgroundColor: "#121212" }}
          >
            <h2 className="font-poppins font-bold text-white text-2xl sm:text-3xl mb-4">
              Prefer to Chat Directly?
            </h2>
            <p className="text-[#B0B0B0] font-inter text-base mb-8 max-w-lg mx-auto">
              The fastest way to reach us is via WhatsApp. Click below to start
              a conversation and we'll respond promptly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.primary_button"
              className="inline-flex items-center gap-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-blue-500/30 text-lg"
            >
              <MessageCircle size={22} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
