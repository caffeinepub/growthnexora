import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#1F1F1F]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
            <div className="w-9 h-9 bg-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-poppins font-bold text-sm">
                GN
              </span>
            </div>
            <span className="text-white font-poppins font-semibold text-lg tracking-tight">
              GrowthNexora
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid="nav.link"
                className={`text-sm font-inter transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-white font-medium"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/923154556761"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.primary_button"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-poppins font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#1F1F1F] bg-[#0B0B0B]/98 backdrop-blur-md">
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid="nav.link"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-inter py-2 transition-colors ${
                    pathname === link.href
                      ? "text-white font-medium"
                      : "text-[#B0B0B0]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/923154556761"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.primary_button"
                className="bg-[#3B82F6] text-white font-poppins font-semibold text-sm px-6 py-3 rounded-full text-center mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
