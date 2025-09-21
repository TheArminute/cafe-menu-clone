import { ArrowRight, MapPin, Phone, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Location = () => {
  const branch = {
    name: 'کافه ماین',
    address: 'تهران، خیابان ولیعصر، نرسیده به پارک ملت، پلاک ۱۲۳',
    phone: '۰۲۱-۱۲۳۴۵۶۷۸',
    hours: 'شنبه تا پنج‌شنبه: ۸:۰۰ - ۲۲:۰۰\nجمعه: ۹:۰۰ - ۲۳:۰۰',
    mapUrl: 'https://maps.google.com/?q=35.7219,51.3347'
  };

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
          {/* Page title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              موقعیت کافه ماین
            </h1>
            <p className="text-muted-foreground">
              به ما سر بزنید
            </p>
          </div>

          {/* Branch */}
          <Card className="coffee-card">
            <CardHeader>
              <CardTitle className="text-right flex items-center justify-between">
                <span>{branch.name}</span>
                <MapPin className="w-5 h-5 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Address */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">آدرس:</p>
                <p className="text-foreground leading-relaxed text-right">
                  {branch.address}
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">تلفن:</p>
                <a 
                  href={`tel:${branch.phone.replace(/[۰-۹]/g, (d) => '0123456789'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)])}`}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {branch.phone}
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">ساعات کاری:</p>
                <p className="text-foreground text-right whitespace-pre-line">
                  {branch.hours}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <a 
                  href={branch.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <Navigation className="w-4 h-4" />
                    مسیریابی
                  </Button>
                </a>
                <a 
                  href={`tel:${branch.phone.replace(/[۰-۹]/g, (d) => '0123456789'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)])}`}
                  className="flex-1"
                >
                  <Button className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    تماس
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Location;
