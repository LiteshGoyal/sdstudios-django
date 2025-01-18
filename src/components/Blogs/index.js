"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('http://localhost:8000/api/blogs/list/');
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);
  return (
    <div className="bg-gray-100 pt-40 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Blog Page
        </h1>
        <div className="flex items-center w-full">
          <a href="/blogs/new-blog" className="mx-auto flex bg-[#05131c] text-gray-100 p-4 rounded-lg mb-4 hover:scale-105 transform duration-300 hover:shadow-2">
            <Plus className="text-gray-100 me-2" /> New blog
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300 transition-shadow">
                <img
                  src={`http://localhost:8000${blog.image}`}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {blog.subtitle}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {new Date(blog.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-700 mt-2">{blog.description}</p>
                  <p className="text-gray-700 mt-2">{blog.author}</p>
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
