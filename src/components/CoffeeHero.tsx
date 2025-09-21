import { Linkedin, Instagram, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
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
        {/* Burger Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="text-right text-lg font-bold mb-6">
              mine
            </SheetTitle>
            <nav className="flex flex-col space-y-4 text-right">

              <Link to="/about" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border">
                درباره‌ی ما
              </Link>
              <Link to="/location" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border">
                موقعیت مکانی
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <p className="text-[10px] font-bold text-white mt-1">MINE COFFEE</p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center z-10 mt-8 md:mt-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          به mine خوش آمدید
        </h1>
        <p className="text-sm md:text-lg mb-6 text-orange-200">
          mine is yours
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