import CoffeeHero from '@/components/CoffeeHero';
import CoffeeMenu from '@/components/CoffeeMenu';
import CoffeeSidebar from '@/components/CoffeeSidebar';
import CoffeeFooter from '@/components/CoffeeFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <CoffeeHero />
      
      <div className="flex flex-1 min-h-0">
        <CoffeeSidebar />
        <div className="flex-1 overflow-hidden">
          <CoffeeMenu />
        </div>
      </div>
      
      <CoffeeFooter />
    </div>
  );
};

export default Index;
