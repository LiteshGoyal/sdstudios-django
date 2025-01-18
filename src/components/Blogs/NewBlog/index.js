"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddBlog() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You must be logged in to create a blog.');
      router.push('/signin');
      return;
    }

    const formData = new FormData();
    formData.append('title', event.target.title.value);
    formData.append('subtitle', event.target.subtitle.value);
    formData.append('description', event.target.description.value);

    const image = event.target.image.files[0];
    if (image) {
      formData.append('image', image);
    }

    const res = await fetch('http://localhost:8000/api/blogs/create/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      alert('Blog created successfully!');
      router.push('/blogs');
    } else {
      alert('Failed to create blog.');
    }
  };

  return (
    <div className="pt-36 my-5 flex items-center justify-center bg-gray-100">
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Add New Blog</h1>

        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            // value={title}
            // required
            // onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">SubTitle</label>
          <input
            type="text"
            name="subtitle"
            // onChange={(e) => setSubtitle(e.target.value)}
            // value={subtitle}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            type="file"
            name="image"
            id="image"
            // onChange={handleImageChange}
            // accept="image/*"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
        <button
          type="submit"
          // disabled={loading}
          className="flex items-center justify-center w-full px-4  py-4  text-base font-bold  hover:text-gray-900 transition-all  duration-200 hover:bg-gray-100 border border-transparent lg:px-8 bg-[#05131c] text-white focus:text-white focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj rounded-lg"
        >
          {/* {loading ? 'Submitting...' : 'Create Blog'} */}
          Create
        </button>
      </form>
    </div>
  );
}
