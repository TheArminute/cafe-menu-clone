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
    <Card className="coffee-card bg-card border-border overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-accent/20 p-2">
            <img 
              src={image}
              alt={persianName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {persianName}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">
            {englishName}
          </p>
          
          <div className="flex gap-4 mb-4">
            <div className="price-badge px-4 py-2 rounded-lg text-center">
              <p className="text-xs text-muted-foreground mb-1">تک شات</p>
              <p className="font-bold text-coffee-dark">{singlePrice}</p>
            </div>
            <div className="price-badge px-4 py-2 rounded-lg text-center">
              <p className="text-xs text-muted-foreground mb-1">جفت شات</p>
              <p className="font-bold text-coffee-dark">{doublePrice}</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;