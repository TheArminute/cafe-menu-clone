import { Linkedin, Instagram } from 'lucide-react';
import coffeeBeansBg from '@/assets/coffee-beans-bg.jpg';

const CoffeeHero = () => {
  return (
    <section 
      className="coffee-hero relative min-h-[40vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${coffeeBeansBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          منوی قهوه امیز
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-orange-200">
          سیری در همه شعبه‌های قهوه امیز
        </p>
        
        <div className="flex justify-center gap-4">
          <div className="social-icon w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
            <Linkedin className="w-6 h-6 text-white" />
          </div>
          <div className="social-icon w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
            <Instagram className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeHero;