import { Phone, MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoffeeFooter = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-coffee-cream/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <span className="text-coffee-cream font-bold text-2xl">M</span>
            </div>
          </div>
          <h2 className="text-lg font-bold text-coffee-cream">کافه ماین</h2>
          <p className="text-coffee-cream/80 text-sm">MINE COFFEE</p>
        </div>

        {/* Location Info */}
        <div className="max-w-md mx-auto space-y-4">
          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-4 h-4 text-coffee-cream flex-shrink-0" />
            <a 
              href="tel:+982112345678" 
              className="text-coffee-cream hover:opacity-80 transition-colors"
            >
              ۰۲۱-۱۲۳۴۵۶۷۸
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start justify-center gap-3">
            <MapPin className="w-4 h-4 text-coffee-cream flex-shrink-0 mt-1" />
            <p className="text-coffee-cream text-sm text-center">
              تهران، خیابان ولیعصر، نرسیده به پارک ملت، پلاک ۱۲۳
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center pt-4">
            <a 
              href="https://maps.google.com/?q=35.7219,51.3347" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2 bg-transparent border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-black">
                <Navigation className="w-4 h-4" />
                مسیریابی
              </Button>
            </a>
            <a href="tel:+982112345678">
              <Button size="sm" className="gap-2 bg-coffee-cream text-black hover:bg-coffee-cream/80">
                <Phone className="w-4 h-4" />
                تماس
              </Button>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-coffee-cream/20">
          <p className="text-coffee-cream/60 text-xs">
            © ۱۴۰۳ کافه ماین. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CoffeeFooter;
