import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MenuCard from "./components/MenuCard";
import { MENU_ITEMS, TESTIMONIALS } from "./constants";
// Added Coffee to the list of icons imported from lucide-react
import { Star, MapPin, Phone, Instagram, Facebook, Clock, ArrowRight, Home, ShoppingBag, Truck, Coffee } from "lucide-react";
// import { unnamed } from "./public";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "food" | "drink" | "dessert">("all");

  const filteredMenu = activeCategory === "all" ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover brightness-[0.65]" alt="Toodz House Ambience" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white pt-32 lg:pt-40">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-white bg-opacity-20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in">Restaurant & Café Cipete</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-slide-up">
              A Cozy House for <br />
              <span className="italic text-cream">Exceptional</span> Brews & Comfort Meals
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-lg opacity-90">Welcoming atmosphere with delightful coffee and comfort food, perfect from sunrise to sunset. Experience home away from home.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-warm-brown hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                Reserve a Table <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-warm-brown px-8 py-4 rounded-full font-bold transition-all">Order Online</button>
            </div>
          </div>
        </div>

        {/* Info Pill */}
        <div className="absolute bottom-12 right-16 z-10 hidden lg:block">
          <div className="flex items-center gap-12 bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 px-10 py-6 rounded-3xl text-white">
            <div className="flex items-center gap-4 border-r border-white border-opacity-20 pr-12">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-warm-brown">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest opacity-60">Opening Hours</p>
                <p className="font-semibold">Open until 10.00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-warm-brown">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest opacity-60">Rating</p>
                <p className="font-semibold">4.7 (4.3K+ Reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP */}
      <div className="bg-warm-brown py-6 text-white overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-12 text-sm font-bold uppercase tracking-[0.3em]">
          <span className="flex items-center gap-2">
            <Home size={16} /> Dine-in
          </span>
          <span className="flex items-center gap-2">
            <ShoppingBag size={16} /> Takeaway
          </span>
          <span className="flex items-center gap-2">
            <Truck size={16} /> No-contact Delivery
          </span>
          <span className="flex items-center gap-2">
            <Home size={16} /> Dine-in
          </span>
          <span className="flex items-center gap-2">
            <ShoppingBag size={16} /> Takeaway
          </span>
          <span className="flex items-center gap-2">
            <Truck size={16} /> No-contact Delivery
          </span>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" alt="Toodz House Story" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-soft-green rounded-3xl -z-0 opacity-20"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-warm-brown rounded-full -z-0 opacity-10"></div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <span className="text-warm-brown font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                  A House That Became Your <br />
                  <span className="italic text-soft-green">Favorite Haven</span>
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Starting as a humble residence in the heart of Cipete, TOODZ HOUSE has evolved into a beloved hangout spot known for its unique homey atmosphere. We believe that great conversations happen over exceptional brews and comfort
                meals.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-3xl font-bold text-warm-brown mb-2">10+</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Years of warmth</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-warm-brown mb-2">4.7</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Average Rating</p>
                </div>
              </div>
              <button className="w-fit bg-soft-green hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-soft-green/20">Explore More</button>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-warm-brown font-bold uppercase tracking-widest text-sm mb-4 block">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Explore Our Menu Highlights</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">Carefully curated dishes and brews made with passion. From signature pasta to artisanal coffee.</p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(["all", "food", "drink", "dessert"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-warm-brown text-white shadow-lg" : "bg-cream text-gray-600 hover:bg-gray-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-warm-brown opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-green opacity-[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={28} className="text-yellow-500" fill="currentColor" />
              ))}
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">Loved by Thousands</h2>
            <p className="text-gray-500 italic">"Over 4,343 happy visitors and counting"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center text-warm-brown font-bold">{t.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Google Local Guide</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-warm-brown font-bold uppercase tracking-widest text-sm mb-4 block">Visual Stories</span>
              <h2 className="text-4xl font-serif font-bold text-gray-900">Step Inside Our World</h2>
            </div>
            <button className="text-warm-brown font-bold border-b-2 border-warm-brown/20 hover:border-warm-brown transition-all pb-1 uppercase tracking-widest text-sm">Follow us on Instagram</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[400px] md:h-[600px]">
            <div className="col-span-1 row-span-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 1" />
            </div>
            <div className="col-span-1 rounded-2xl md:rounded-[2.5rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 2" />
            </div>
            <div className="col-span-1 md:col-span-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581068106019-5aa70c6ab424?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 3" />
            </div>
            <div className="col-span-1 rounded-2xl md:rounded-[2.5rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 4" />
            </div>
            <div className="col-span-1 rounded-2xl md:rounded-[2.5rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 5" />
            </div>
            <div className="col-span-1 rounded-2xl md:rounded-[2.5rem] overflow-hidden">
              <img src="https://media.istockphoto.com/id/679105032/id/foto/es-krim-dengan-saus-cokelat-dan-wafel.jpg?s=1024x1024&w=is&k=20&c=_KEKd4icZjl6FzYq0UEjrNBiCJjTnDpIj7GbUJH3yJM=" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 6" />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section id="location" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Visit Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-warm-brown shadow-sm flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Address</p>
                      <p className="text-gray-600 leading-relaxed">
                        Jl. Cipete Raya No.79 7, RT.7/RW.4, <br />
                        Cipete Selatan, Cilandak, Jakarta Selatan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-warm-brown shadow-sm flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Call Us</p>
                      <p className="text-gray-600">(021) 75904015</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-warm-brown shadow-sm flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Working Hours</p>
                      <p className="text-gray-600">Daily: 08:00 AM – 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button className="bg-warm-brown text-white px-8 py-4 rounded-full font-bold transition-all w-fit shadow-lg shadow-warm-brown/20">Find a Table</button>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-warm-brown transition-colors shadow-sm">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-warm-brown transition-colors shadow-sm">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px] border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.867295245869!2d106.80489957618237!3d-6.281137061483832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1906260d3d3%3A0x7d28712398d5789b!2sTOODZ%20HOUSE!5e0!3m2!1sen!2sid!4v1711234567890!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-warm-brown text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
            <div className="flex items-center gap-2">
              <Coffee className="w-10 h-10" />
              <span className="text-3xl font-serif font-bold tracking-tight">TOODZ HOUSE</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-white/70">
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#menu" className="hover:text-white transition-colors">
                Menu
              </a>
              <a href="#location" className="hover:text-white transition-colors">
                Location
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© 2024 TOODZ HOUSE. All rights reserved. Built with love in Jakarta.</p>
            <p>Prices in IDR. Tax and Service inclusive where applicable.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default App;
