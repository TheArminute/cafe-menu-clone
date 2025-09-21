import { Linkedin, Instagram, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import coffeeBeansBg from '@/assets/coffee-beans-bg.jpg';

const CoffeeHero = () => {
  return (
    <section 
      className="coffee-hero relative h-48 md:h-60 flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${coffeeBeansBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Header overlay on image */}
      <div className="absolute top-0 left-0 right-0 z-20 px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div className="mr-3 text-right">
            <p className="text-xs text-orange-200">لامیز کافی</p>
            <p className="text-xs font-bold text-white">LAMIZ COFFEE</p>
          </div>
        </div>

        {/* Burger Menu */}
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          منوی قهوه امیز
        </h1>
        <p className="text-sm md:text-lg mb-6 text-orange-200">
          سیری در همه شعبه‌های قهوه امیز
        </p>
        
        <div className="flex justify-center gap-3">
          <div className="social-icon w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <Linkedin className="w-5 h-5 text-white" />
          </div>
          <div className="social-icon w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <Instagram className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeHero;