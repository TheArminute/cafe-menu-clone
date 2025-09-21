import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import img1 from '@/assets/coffee-beans-bg.jpg';
import img2 from '@/assets/espresso.jpg';
import img3 from '@/assets/cappuccino.jpg';
import img4 from '@/assets/latte.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowRight className="h-4 w-4" />
              بازگشت به منو
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[img1, img2, img3, img4, img2, img3].map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden bg-accent/20">
                <img src={src} alt={`عکس کافه ${i + 1}`} className="w-full h-32 md:h-40 object-cover" />
              </div>
            ))}
          </div>

          {/* Contact & Info */}
          <Card className="coffee-card">
            <CardContent className="p-6 md:p-8 space-y-6">
              {/* Phone */}
              <div className="flex items-start justify-between">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">شماره تماس</p>
                  <a href="tel:+982112345678" className="text-lg font-bold text-foreground">
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                </div>
                <Phone className="w-5 h-5 text-primary" />
              </div>

              {/* Address */}
              <div className="flex items-start justify-between">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">آدرس</p>
                  <p className="text-lg font-bold text-foreground leading-relaxed">
                    کرج، خیابان مثال، کوچه نمونه، پلاک ۱۰
                  </p>
                </div>
                <MapPin className="w-5 h-5 text-primary" />
              </div>

              {/* Hours */}
              <div className="flex items-start justify-between">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">ساعات کاری</p>
                  <p className="text-lg font-bold text-foreground">هر روز ۸:۰۰ تا ۲۲:۰۰</p>
                </div>
                <Clock className="w-5 h-5 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
