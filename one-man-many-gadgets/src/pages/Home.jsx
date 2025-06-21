// src/pages/Home.jsx (uses shared Header component)
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "The MacBook You Should Buy in 2025",
      image: "/assets/macbook.jpg",
    },
    {
      id: 2,
      title: "AirPods Pro Gen 3 Review",
      image: "/assets/airpods.jpg",
    },
    {
      id: 3,
      title: "The Cleanest Desk Setups for Tech Lovers",
      image: "/assets/desk.jpg",
    },
  ];

  return (
    <div className="w-full">

      {/* Featured Post Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
        <img
          src="/assets/macbook.jpg"
          alt="Featured Post"
          className="w-full h-72 object-cover rounded"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">
            The MacBook You Should Buy in 2025
          </h2>
          <p className="text-gray-700 mb-4">
            In this post, I break down the best MacBook models for students, power users,
            and casual users in 2025. Spoiler: the M4 chip changes everything.
          </p>
          <Link
            to="/post/1"
            className="text-blue-600 font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>

      {/* Latest Posts Grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Latest Reviews</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="group block bg-white shadow hover:shadow-xl transition rounded overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold group-hover:text-blue-600">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
