import CoffeeCard from './CoffeeCard';
import espressoImg from '@/assets/espresso.jpg';
import cappuccinoImg from '@/assets/cappuccino.jpg';
import macchiatoImg from '@/assets/macchiato.jpg';
import latteImg from '@/assets/latte.jpg';

const coffeeItems = [
  {
    image: espressoImg,
    persianName: 'اسپرسو',
    englishName: 'ESPRESSO',
    singlePrice: '۴۸,۰۰۰',
    doublePrice: '۹۸,۰۰۰',
    description: '100 ربوستا'
  },
  {
    image: macchiatoImg,
    persianName: 'اسپرسو ماکیاتو',
    englishName: 'ESPRESSO MACCHIATO',
    singlePrice: '۸۶,۰۰۰',
    doublePrice: '۱۰۷,۰۰۰',
    description: 'محدودیت: اسپرسو لیمیتر با کوم زیاد'
  }
];

const CoffeeMenu = () => {
  return (
    <main className="flex-1 p-3 md:p-4 lg:p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 md:space-y-4 lg:space-y-6">
          {coffeeItems.map((item, index) => (
            <CoffeeCard
              key={index}
              image={item.image}
              persianName={item.persianName}
              englishName={item.englishName}
              singlePrice={item.singlePrice}
              doublePrice={item.doublePrice}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CoffeeMenu;