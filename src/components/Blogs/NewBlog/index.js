"use client";
import { useState } from "react";
export default function AddBlog() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  async function handleform(formData) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.token) {
      alert("User not logged in");
      return;
    }

    const fd = {
      title: formData.get("title"),
      subtitle: formData.get("subtitle"),
      description: formData.get("description"),
      image: formData.get("image"),
    };

    try {
      const res = await fetch("http://localhost:8000/api/blogs/create", {
        method: "POST",
        body: JSON.stringify(fd),
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${user.token}`, 
        },
      });

      const resData = await res.json();
      if (res.ok) {
        setSuccessMessage(true);
        setErrMessage("");
        location.href = "/blogs";
      } else {
        const errorArr = Object.entries(resData).flatMap(([key, values]) =>
          values.map((value) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))
        );
        setErrMessage(errorArr);
        setSuccessMessage(false);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrMessage(["An unexpected error occurred."]);
    }
  }

  return (
    <div className="pt-36 my-5 flex items-center justify-center bg-gray-100">
      <form
        action={handleform}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Add New Blog</h1>

        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">SubTitle</label>
          <input
            type="text"
            name="subtitle"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full px-4  py-4  text-base font-bold  hover:text-gray-900 transition-all  duration-200 hover:bg-gray-100 border border-transparent lg:px-8 bg-[#05131c] text-white focus:text-white focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj rounded-lg"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
