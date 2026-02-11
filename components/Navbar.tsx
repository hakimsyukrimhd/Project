import React, { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-cream shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <Coffee className={`w-8 h-8 transition-colors ${scrolled ? "text-warm-brown" : "text-white"}`} />
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${scrolled ? "text-warm-brown" : "text-white"}`}>TOODZ HOUSE</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-gray-700 hover:text-warm-brown" : "text-white hover:text-cream"}`}>
              {link.name}
            </a>
          ))}
          <button className="bg-warm-brown text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all">Reserve a Table</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-cream shadow-xl transition-all duration-300 transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-warm-brown">
              {link.name}
            </a>
          ))}
          <button className="bg-warm-brown text-white px-6 py-3 rounded-full text-center font-bold">Reserve a Table</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
