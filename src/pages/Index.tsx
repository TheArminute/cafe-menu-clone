import CoffeeHero from '@/components/CoffeeHero';
import CoffeeMenu from '@/components/CoffeeMenu';
import CoffeeSidebar from '@/components/CoffeeSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CoffeeHero />
      
      <div className="flex flex-col md:flex-row">
        <CoffeeMenu />
        <CoffeeSidebar />
      </div>
    </div>
  );
};

export default Index;
