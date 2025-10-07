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
    singlePrice: '48,000',
    doublePrice: '98,000',
    description: '100 ربوستا'
  },
  {
    image: macchiatoImg,
    persianName: 'اایس کارامل ماکیاتو',
    englishName: 'ESPRESSO MACCHIATO',
    singlePrice: '۸۶,۰۰۰',
    doublePrice: '۱۰۷,۰۰۰',
    description: 'تشکیل شده از قهوه و کارامل'
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