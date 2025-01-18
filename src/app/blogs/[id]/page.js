import { Link } from "lucide-react";


export default function BlogPage({ params }) {
  const blog = blog.find((b) => b.id === params.id);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300 transition-shadow">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {blog.headline}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {blog.created_at}
                  </p>
                  <p className="text-gray-700 mt-2">{blog.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
  );
}
