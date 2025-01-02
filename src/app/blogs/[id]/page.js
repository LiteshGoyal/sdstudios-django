export const blogs = [
  {
    id: "1",
    image: "/blog1.jpg",
    headline: "How to Build a Website with Next.js",
    longDescription:
      "Next.js is a powerful framework for building web applications. In this blog, we'll cover its features, advantages, and how you can use it to create dynamic and static websites.",
    date: "December 30, 2024",
  },
  {
    id: "2",
    image: "/blog2.jpg",
    headline: "10 Tips for Better Web Design",
    longDescription:
      "Web design is more than just aesthetics; it's about creating a user-friendly and engaging experience. Here are 10 tips for better web design.",
    date: "December 29, 2024",
  },
];

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{blog.headline}</h1>
      <img src={blog.image} alt={blog.headline} className="w-full my-4" />
      <p className="text-gray-600">{blog.date}</p>
      <p className="mt-4">{blog.longDescription}</p>
    </div>
  );
}
