import CategoryCard from "./CategoryCard";
import WhyChooseUs from "./ChooseUs";

const Category = () => {
  const categories = [
    {
      imageSrc: '/images/category1.png',
      centerText: 'Save 30%',
      leftText: 'Fast Food Dish',
    },
    {
      imageSrc: '/images/category2.png',
      centerText: 'Save 30%',
      leftText: 'Fast Food Dish',
    },
    {
      imageSrc: '/images/category3.png',
      centerText: 'Save 30%',
      leftText: 'Fast Food Dish',
    },
    {
      imageSrc: '/images/category4.png',
      centerText: 'Save 30%',
      leftText: 'Fast Food Dish',
    },
  ];

  return (
    <div className="w-full px-6 sm:px-16 md:px-32 lg:px-64 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full">
          <h2 className="text-primary-yellow font-great text-center text-2xl">Food category</h2>
          <h1 className="text-white text-center text-4xl font-bold">
            <span className="text-primary-yellow">Ch</span>oose Food Item
          </h1>
          
          {/* Card Section */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                imageSrc={category.imageSrc}
                centerText={category.centerText}
                leftText={category.leftText}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Category;
