"use client";
import { useState } from "react";
export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:8000/api/blogs/create', {  // Adjust the URL according to your backend URL
        method: 'POST',
        headers: {
          // Add your authorization token if needed
        },
        body: formData,
      });

      if (response.ok) {
        alert('Blog created successfully');
        setTitle('');
        setSubtitle('');
        setDescription('');
        setImage(null);
        location.href = '/blogs'
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
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
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">SubTitle</label>
          <input
            type="text"
            name="subtitle"
            onChange={(e) => setSubtitle(e.target.value)}
            value={subtitle}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            onChange={handleImageChange}
            // accept="image/*"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center w-full px-4  py-4  text-base font-bold  hover:text-gray-900 transition-all  duration-200 hover:bg-gray-100 border border-transparent lg:px-8 bg-[#05131c] text-white focus:text-white focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj rounded-lg"
        >
          {loading ? 'Submitting...' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
}
