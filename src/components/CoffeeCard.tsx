import { Card, CardContent } from '@/components/ui/card';

interface CoffeeCardProps {
  image: string;
  persianName: string;
  englishName: string;
  singlePrice: string;
  doublePrice: string;
  description: string;
}

const CoffeeCard = ({ 
  image, 
  persianName, 
  englishName, 
  singlePrice, 
  doublePrice, 
  description 
}: CoffeeCardProps) => {
  return (
    <Card className="coffee-card bg-card border-0 shadow-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-4 md:p-6">
        {/* Mobile/Tablet optimized layout */}
        <div className="flex items-start gap-4">
          {/* Coffee Image */}
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full overflow-hidden bg-accent/10">
            <img 
              src={image}
              alt={persianName}
              className="w-full h-full object-cover"
              loading="lazy"
              width={96}
              height={96}
              sizes="(min-width: 768px) 96px, 80px"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
              {/* Title & English Name */}
              <div className="text-right">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                  {persianName}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {englishName}
                </p>
              </div>
              
              {/* Prices */}
              <div className="flex gap-2 flex-shrink-0">
                <div className="text-center min-w-0">
                  <p className="text-xs text-muted-foreground">تک شات</p>
                  <p className="font-bold text-sm text-coffee-dark">{singlePrice}</p>
                </div>
                <div className="text-center min-w-0">
                  <p className="text-xs text-muted-foreground">جفت شات</p>
                  <p className="font-bold text-sm text-coffee-dark">{doublePrice}</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xs text-muted-foreground leading-relaxed mt-3 text-right">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;