import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoffeeHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-coffee-dark rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div className="mr-3 text-right">
            <p className="text-xs text-muted-foreground">لامیز کافی</p>
            <p className="text-xs font-bold text-coffee-dark">LAMIZ COFFEE</p>
          </div>
        </div>

        {/* Burger Menu */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default CoffeeHeader;