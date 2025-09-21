import espressoImg from '@/assets/espresso.jpg';
import cappuccinoImg from '@/assets/cappuccino.jpg';
import latteImg from '@/assets/latte.jpg';
import mochaImg from '@/assets/mocha.jpg';

const sidebarItems = [
  { name: 'نوشیدنی گرم', image: espressoImg },
  { name: 'نوشیدنی سرد', image: cappuccinoImg },
  { name: 'نوشیدنی فصلی', image: latteImg },
  { name: 'ماچا', image: mochaImg },
  { name: 'Mood And Move', image: espressoImg },
  { name: 'قهوه دمی', image: cappuccinoImg },
  { name: 'چای و دمنوش', image: latteImg },
];

const CoffeeSidebar = () => {
  return (
    <aside className="hidden md:flex md:flex-col w-16 bg-background border-l border-border py-4">
      <div className="flex flex-col items-center space-y-4">
        {sidebarItems.map((item, index) => (
          <div 
            key={index}
            className="group flex flex-col items-center cursor-pointer"
            title={item.name}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-accent/20 p-2 group-hover:bg-accent/40 transition-colors">
              <img 
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CoffeeSidebar;