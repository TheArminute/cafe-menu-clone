import CoffeeHero from '@/components/CoffeeHero';
import CoffeeMenu from '@/components/CoffeeMenu';
import CoffeeSidebar from '@/components/CoffeeSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <CoffeeHero />
      
      <div className="flex flex-1 min-h-0">
        <CoffeeSidebar />
        <CoffeeMenu />
      </div>
    </div>
  );
};

export default Index;
