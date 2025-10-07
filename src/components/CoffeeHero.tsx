import { Instagram } from 'lucide-react';
import coffeeBeansBg from '@/assets/WhatsApp Image 2025-10-02 at 14.33.55_45129091.jpg';
import coffeeLogo from "@/assets/android-chrome-192x192.png";

const CoffeeHero = () => {
  return (
    <div className="w-full">
      {/* Minimal black header bar */}
           <header className="w-full h-12 md:h-16 bg-black flex items-center justify-between px-5">
        <span className="text-coffee-cream font-semibold text-base md:text-lg">MINE</span>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-coffee-cream/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
          {/* <span  */}
          <img src={coffeeLogo} alt="کافه ماین - mine cafe" className="w-34 h-34 md:w-34 md:h-36 " />
          {/* </span> */}
        </div>
      </header>

      {/* Hero section */}
      <section
        className="coffee-hero flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${coffeeBeansBg})`,
          backgroundSize: 'cover',
          objectFit: 'fill',
          backgroundPosition: 'center',
          minHeight: '16rem'
        }}

      >
        <img src={coffeeBeansBg} className="coffee-hero flex items-center justify-center text-white overflow-hidden" style={
          {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${coffeeBeansBg})`,
            backgroundSize: 'cover',
            objectFit: 'fill',
            backgroundPosition: 'center',
            minHeight: '16rem'
          }
        } alt="" />
        <div className="container mx-auto px-4 py-10 md:py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-coffee-cream">MINE</h1>
          <p className="text-sm md:text-lg mb-6 text-coffee-cream/80">MINE IS YOURS</p>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/_cafe.mine_?igsh=MXUydXhzOXRzaHpweQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-transparent"
            >
              <Instagram className="w-5 h-5 text-coffee-cream" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeHero;
