"use client";
import { useEffect, useState } from "react";

const UpdateUser = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovering: false });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found. Please sign in.");
        return;
      }

      const res2 = await fetch("http://localhost:8000/api/current-user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (res2.ok) {
        const data = await res2.json();
        setUser(data);
      } else {
        console.error("Failed to fetch user info");
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const res = await fetch("http://localhost:8000/api/user/update/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("User updated successfully!");
      location.href = "/dashboard";
    } else {
      alert(data.error || "User update failed.");
    }
  };

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - left,
      y: e.clientY - top,
      isHovering: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ ...mousePos, isHovering: false });
  };

  return (
    <div className=" p-8">
      <h1 className="flex  justify-center mx-auto mb-8 text-4xl xl:text-4xl font-bold text-gray-800">
        Admin Dashboard
      </h1>
      <div className=" p-4 mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 lg:space-x-4">
        <div
          className="p-5  hover:scale-105 transform duration-300 bg-black"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            background: mousePos.isHovering
              ? `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0.5), transparent)`
              : "transparent",
          }}
        >
          {user ? (
            <div className="">
              <img
                src="/logo/logo.png"
                className="bg-gray-100 rounded-full mx-auto w-32 h-32 shadow-xl"
                alt=""
              />
              <p className="text-lg text-gray-600 mt-4 mx-auto max-w-[250px]">
                That's how we remember you: <br />{" "}
                <p className="flex justify-center font-bold"> {user.username} !</p>
              </p>
              <p className="text-lg text-gray-600 mt-4 mx-auto max-w-[250px]">
                <p className="flex justify-center"> Your email:</p>{" "}
                <p className="flex justify-center font-bold"> {user.email} !</p>
              </p>
              </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="border p-5 rounded-xl shadow-lg hover:scale-105 transform duration-300">
          <h2 className="text-2xl mb-4 font-semibold text-gray-800">
            Update Your Profile
          </h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {message && <div className="text-green-500 mb-4">{message}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="New Username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="New Password"
              />
            </div>

            <button
              type="submit"
              className="flex
                                items-center
                                justify-center
                                w-full
                                px-4
                                py-4
                                text-base
                                font-bold
                                hover:text-gray-900
                                transition-all
                                duration-200
                                hover:bg-gray-100
                                border border-transparent
                                lg:px-8
                                bg-[#05131c] text-white
                                hover:border-[#05131c]
                                focus:text-white focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                font-pj
                                rounded-lg"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
