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
    description: 'محدودیت: تحضیرات معادل ۳۰ میلی‌لیتر و جمت شات معادل ۶۰ میلی‌لیتر این معیار قابل تغییر و تطبیق خواهد بود'
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
    <main className="flex-1 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </main>
  );
};

export default CoffeeMenu;