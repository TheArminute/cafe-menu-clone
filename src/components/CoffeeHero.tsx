import { Instagram } from 'lucide-react';
import coffeeBeansBg from '@/assets/coffee-beans-bg.jpg';

const CoffeeHero = () => {
  return (
    <div className="w-full">
      {/* Minimal black header bar */}
      <header className="w-full h-12 md:h-16 bg-black flex items-center justify-between px-5">
        <span className="text-coffee-cream font-semibold text-base md:text-lg">کافه</span>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-coffee-cream/20 rounded-lg flex items-center justify-center">
          <span className="text-coffee-cream font-bold text-sm md:text-base">M</span>
        </div>
      </header>

      {/* Hero section */}
      <section
        className="coffee-hero flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${coffeeBeansBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '16rem'
        }}
      >
        <div className="container mx-auto px-4 py-10 md:py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-coffee-cream">به mine خوش آمدید</h1>
          <p className="text-sm md:text-lg mb-6 text-coffee-cream/80">mine is yours</p>
          <div className="flex justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
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
