import { Linkedin, Instagram } from 'lucide-react';
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