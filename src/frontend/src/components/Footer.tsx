import { Link } from "@tanstack/react-router";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const socials = [
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/growth_nexora?igsh=aG8zend1NWNtbGZ6",
    label: "Instagram",
  },
  {
    icon: SiFacebook,
    href: "https://www.facebook.com/share/1CB5UkzTKN/",
    label: "Facebook",
  },
  { icon: SiX, href: "https://x.com/GrowthNexora", label: "Twitter/X" },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/muhammad-zain-shahbaz-2907963b7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#121212] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-sm">
                  GN
                </span>
              </div>
              <span className="text-white font-poppins font-semibold text-lg">
                GrowthNexora
              </span>
            </Link>
            <p className="text-[#B0B0B0] font-inter text-sm leading-relaxed max-w-xs">
              Engineering systems that drive real growth.
            </p>
          </div>

          <div>
            <h4 className="text-white font-poppins font-semibold text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-ocid="footer.link"
                    className="text-[#B0B0B0] hover:text-[#3B82F6] font-inter text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-poppins font-semibold text-sm uppercase tracking-widest mb-6">
              Follow Us
            </h4>
            <div className="flex items-center gap-4 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-ocid="footer.link"
                  className="w-10 h-10 rounded-full bg-[#1F1F1F] border border-[#2A2A2A] flex items-center justify-center text-[#B0B0B0] hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-sm text-[#B0B0B0] font-inter">
              <a
                href="mailto:Growthnexora8@gmail.com"
                className="hover:text-white transition-colors"
              >
                Growthnexora8@gmail.com
              </a>
              <a
                href="https://wa.me/923154556761"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3B82F6] transition-colors"
              >
                +92 315 4556761
              </a>
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1F1F1F] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#B0B0B0] font-inter text-sm">
            &copy; {currentYear} GrowthNexora. All rights reserved.
          </p>
          <p className="text-[#B0B0B0] font-inter text-sm">
            Built with &#10084; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
