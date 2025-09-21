import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CoffeeFooter from '@/components/CoffeeFooter';
import img1 from '@/assets/coffee-beans-bg.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal black header */}
      <header className="w-full h-12 md:h-16 bg-black flex items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <span className="text-coffee-cream font-semibold text-base md:text-lg">کافه</span>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-coffee-cream hover:bg-coffee-cream/10 h-8 px-3">
              <ArrowRight className="h-3 w-3" />
              بازگشت
            </Button>
          </Link>
        </div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-coffee-cream/20 rounded-lg flex items-center justify-center">
          <span className="text-coffee-cream font-bold text-sm md:text-base">M</span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              درباره کافه ماین
            </h1>
            <p className="text-muted-foreground">
              داستان ما، فضای ما، قهوه‌های ما
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
            <img 
              src={img1}
              alt="کافه ماین" 
              className="w-full h-full object-cover" 
              loading="lazy"
              width={1200}
              height={400}
              sizes="100vw"
            />
          </div>
        </div>
      </main>
      
      <CoffeeFooter />
    </div>
  );
};

export default About;
