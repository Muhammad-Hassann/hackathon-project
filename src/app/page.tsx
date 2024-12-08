import Chefs from "@/components/Chefs";
import Menu from "@/components/Menu";
import RestaurantCard from "@/components/home/RestaurantCard";
import Testimonial from "@/components/Testimonial";
import About from "@/components/home/About";
import Acheivements from "@/components/home/Achievements";
import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <div className="bg-secondary-black h-full w-full">
      <Hero />
      <About />
      <Category />
      <Acheivements />
      <Menu />
      <Chefs />
      <Testimonial />
      <RestaurantCard />
      <BlogSection />
    </div>
  );
}
