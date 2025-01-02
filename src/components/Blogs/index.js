import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: "/Hero/hero-bg.jpg",
      headline: "How to Build with Next.js",
      description: "Learn the basics of building a website using Next.js.",
      longDescription:
        "Next.js is a powerful framework for building web applications. In this blog, we’ll cover its features, advantages, and how you can use it to create dynamic and static websites.",
      date: "December 30, 2024",
    },
    {
      id: 2,
      image: "/logo/sdstudios.png",
      headline: "10 Tips for Better Web Design",
      description:
        "Discover 10 essential tips to improve your web design skills.",
      longDescription:
        "Web design is more than just aesthetics. In this blog, we’ll explore how to create user-friendly, accessible, and visually appealing websites.",
      date: "December 29, 2024",
    },
    {
      id: 3,
      image: "/logo/sd.png",
      headline: "Understanding Tailwind CSS",
      description:
        "A comprehensive guide to getting started with Tailwind CSS.",
      longDescription:
        "Tailwind CSS is a utility-first CSS framework. This blog dives deep into its utility-based classes, setup process, and how it simplifies styling.",
      date: "December 28, 2024",
    },
  ];

  return (
    <div className="bg-gray-100 pt-40 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Blog Page
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300 transition-shadow">
                <img
                  src={blog.image}
                  alt={blog.headline}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {blog.headline}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">{blog.date}</p>
                  <p className="text-gray-700 mt-2">{blog.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
