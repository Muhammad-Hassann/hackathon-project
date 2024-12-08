import BlogCard from "./BlogCard";

const BlogSection = () => {
  const blogs = [
    {
      image: "/images/category3.png",
      date: "December 8, 2024",
      title: "How to Cook Perfect Pasta Every Time",
    },
    {
      image: "/images/category2.png",
      date: "December 7, 2024",
      title: "Top 10 Food Trends of the Year",
    },
    {
      image: "/images/choose1.png",
      date: "December 6, 2024",
      title: "Benefits of Organic Ingredients in Cooking",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-64 py-20">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-primary-yellow font-great text-2xl">Our Blog</h2>
        <h1 className="text-white text-4xl font-bold">Latest Blog Posts</h1>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            date={blog.date}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
