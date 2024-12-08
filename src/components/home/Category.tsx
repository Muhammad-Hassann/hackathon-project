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
    <div className="w-full px-64 py-20 ">
        <div className="flex  justify-between items-center">
            <div className="w-full ">
       <h2 className="text-primary-yellow font-great text-center text-2xl">Food category</h2>
    <h1 className="text-white text-center text-4xl font-bold ">
      <span className="text-primary-yellow ">Ch</span>oose Food Item 
    </h1>
     {/* Card Section */}
     <div className="mt-10 flex justify-center items-center gap-8">
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
  )
}

export default Category