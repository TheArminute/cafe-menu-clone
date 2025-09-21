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
    <aside className="w-full md:w-64 bg-accent/30 p-4">
      <div className="space-y-4">
        {sidebarItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 shadow-sm">
              <img 
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-sm font-medium text-coffee-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CoffeeSidebar;