import CoffeeHero from '@/components/CoffeeHero';
import CoffeeHeader from '@/components/CoffeeHeader';
import CoffeeMenu from '@/components/CoffeeMenu';
import CoffeeSidebar from '@/components/CoffeeSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <CoffeeHeader />
      <CoffeeHero />
      
      <div className="flex flex-1 min-h-0">
        <CoffeeMenu />
        <CoffeeSidebar />
      </div>
    </div>
  );
};

export default Index;
