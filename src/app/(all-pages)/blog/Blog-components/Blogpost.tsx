import Blogcard from "./Blogcard";

const BlogPostPage = () => {
  const blogPosts = [
    {
      imageSrc: "/images/blog1.png",
      date: "Feb 14, 2022",
      comments: 3,
      author: "Admin",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      imageSrc: "/images/blog1.png",
      date: "Feb 14, 2022",
      comments: 3,
      author: "Admin",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      imageSrc: "/images/blog1.png",
      date: "Feb 14, 2022",
      comments: 3,
      author: "Admin",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      imageSrc: "/images/blog1.png",
      date: "Feb 14, 2022",
      comments: 3,
      author: "Admin",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Blogcard
            key={index}
            imageSrc={post.imageSrc}
            date={post.date}
            comments={post.comments}
            author={post.author}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostPage;
